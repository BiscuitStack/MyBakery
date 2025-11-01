# BakeWise Architecture

Overview
- Monorepo managed by Nx with API Gateway (NestJS), Frontend (Next.js), and NestJS microservices that communicate solely via RabbitMQ.
- Shared libraries under `libs/` (e.g., `common`, `messaging`, `validation`, `contracts`, `database`, `auth`) exposed as `@bakewise/*` aliases.

Core Principles
- Small, deterministic changes; simplest viable solutions.
- Soft-delete policy; UUID v4 IDs; unified error shape `{ status, code, message, details? }`.
- Encrypt sensitive data at rest; all service-to-service links and RabbitMQ connections use TLS.

Git Branching Strategy
- `main` is the trunk and always reflects the latest production-ready state.
- All work happens on short-lived branches cut from `main`; merge back via PR once tests and reviews pass.
- Branch naming: `feature/<pdr-section>-short-desc`, `fix/<ticket>-short-desc`, `chore/<scope>-short-desc`, `hotfix/<issue>-short-desc`.
- Release tags (e.g., `v1.0.0`) are created from `main` after deployment verification; emergency fixes branch from tag → `hotfix/` → merge back into `main`.
- Rebase branches onto `main` before opening/merging PRs to keep history linear; avoid merge commits.
- Each branch must run `nx affected -t lint,test,build` for impacted projects before merge.

Services & Responsibilities
- API Gateway: sole HTTP entrypoint, tenant-aware routing, JWT validation, aggregation for dashboard views, publishes domain commands/events via RabbitMQ.
- Frontend: Next.js UI (future) consuming gateway APIs; initial provisioning UI excluded in v1.
- Auth & Tenancy Service: tenant provisioning API (secret-protected), subdomain lookup, user lifecycle, JWT issuance/validation.
- Customer Service: customer profiles, notes, ratings, spend/open-order rollups, CRM-facing audit stream.
- Inventory Service: stock catalog (with multi-category tagging), purchase capture with cost-basis recalculation, price history/trend tracking per supplier, stock-level projections, low-stock alerting.
- Recipes Service: recipe and variant management, unit conversion, cost snapshotting, version history.
- Orders Service: order intake, calendar scheduling, payment status & deposit ledger, pricing override logic, fulfillment tracking.
- Production Planning Service: consumes confirmed orders to build daily production plans, batches, equipment timelines, and task assignments; surfaces conflicts and emits task status events.
- Waste Management (within Inventory Service): waste logging endpoints, stock deductions, dashboard feeds, and audit emission for spoilage tracking.
- Analytics Module (initially within dashboard aggregation): generates KPI trends, configurable reports, and chart data for business insights. Designed to evolve into a standalone service alongside dashboard split.
- Metrics/Audit processing lives logically within gateway + services through outbox + subscribers; dedicated dashboard aggregation module runs inside the gateway scope for now.

Shared Libraries
- `libs/common`: Cross-cutting utilities (dates, formatting, constants, category/enumerations, task status helpers).
- `libs/messaging`: RabbitMQ client abstraction, outbox processor, retry/backoff helpers.
- `libs/validation`: DTO/schema validation helpers.
- `libs/contracts`: Message shapes and API contracts.
- `libs/database`: Prisma helpers (tenant scoping middleware, soft-delete mixins).
- `libs/auth`: JWT helpers, role guards.
- `libs/units`: Centralized mass/volume conversion tables (`g↔kg`, `ml↔l`, etc.).
- `libs/common-errors`: Canonical error codes, error-response helpers, and shared exception types. Every service must reference codes from this package.
- Error catalog lives in `/docs/error-catalog.md` (future) to describe meanings and remediation steps for each code.
- `libs/ui-charts`: Shared chart components (Chart.js/Recharts wrappers) with BakeWise theming and accessibility defaults. Only `scope:dashboard` (and eventually analytics service) should consume this library.

Persistence
- PostgreSQL (Helm subchart in deploy) accessed via Prisma ORM. Each microservice owns its Postgres database/schema, defined alongside the service implementation. Shared helpers live in `libs/database`.
- All tables use `snake_case`, include `tenant_id`, timestamps, `deleted`, `deleted_at`, `deleted_by_id`.
- Unit conversion data stored centrally (read-only reference) to keep recipe costing consistent.
- Inventory schema includes category tables (`stock_categories`, `stock_item_categories`) and trend tables/views (`stock_price_trends`) to support purchasing UX and reporting.
- Production schema introduces `production_plans`, `production_batches`, `production_tasks`, and `equipment` tables for scheduling.
- Waste logging reuses inventory database with `waste_logs` table plus triggers to adjust on-hand quantities.
- Analytics relies on aggregated views (materialized or cached) tailored for chart queries; ensure they isolate per-tenant data and refresh on event ingestion.

Messaging
- RabbitMQ (Helm subchart). Mandatory outbox pattern in every service; messages published after local transaction commit.
- Topic exchanges named `bakewise.<service>.events`; routing keys `bakewise.<context>.<entity>.<event>.v<version>`.
- Messages include headers for `tenantId`, `userId`, `correlationId`, `timestamp`; consumers are idempotent with max 3 retries (exponential backoff), DLQ, and replay endpoints.
- Refer to `docs/events.md` (future) for schema details; interim list captured below.

Deployment
- Helm chart in `deploy/chart`. Local dev via Docker Desktop K8s; production targets EKS.
- Each service has its own Dockerfile, `/health` endpoint, and dedicated Postgres instance.

Testing
- Jest for unit/integration; Supertest for NestJS e2e; Playwright/Cypress for frontend e2e. Target ≥90% coverage for core libs/services.
- Golden-path integration: stock item → purchase → recipe → order → dashboard inclusion.
- Inventory-specific tests cover category-filtered purchase entry and price trend aggregation per supplier.
- Production-specific tests cover plan generation, conflict detection, and task status transitions.
- Waste logging tests cover inventory deduction, audit emission, and dashboard metric updates.
- Gateway E2E covers subdomain login, tenant inference, dashboard metrics.
- Analytics tests validate chart data endpoints (filters, custom report queries) and ensure permissions scope results to the requesting tenant/user role.

Auth & Tenant Flow
- Subdomain determines tenant slug (e.g., `acme.bakewise.app`). Gateway resolves tenant metadata before login.
- Provisioning API (Auth service) requires shared secret, creates tenant + owner user, seeds default markup (25%).
- Login returns JWT containing `sub`, `tenantId`, `role`. Gateway verifies JWT on every request, enforces subdomain/tenant match, and forwards `x-tenant-id` / `x-user-id` headers internally.
- Downstream services trust gateway signature, re-validate JWT, and scope Prisma queries by `tenantId`.

Order Lifecycle & Pricing
- Orders lock recipe cost basis + suggested price at creation; owners can override final price or target profit/margin which recalculates price.
- Payment statuses: `UNPAID`, `DEPOSIT_RECEIVED`, `PAID`; deposit ledger tracks multiple payments.
- Only orders with deposit or full payment count toward financial metrics.
- Drag-and-drop rescheduling updates `due_date`; fulfillment metrics compare `delivered_at` vs `due_date` and count overdue-but-incomplete orders as late once due date passes.

Operational Dashboard KPIs
- Current month gross profit (sum of final price minus locked cost for orders with `due_date` in month and payment status deposit/paid).
- Estimated gross profit for orders due this month (same filter).
- Outstanding balance (final price minus deposits received for current-month orders).
- Month-over-month comparison (absolute + percentage deltas against previous month gross profit).
- Six-month average gross margin (average of monthly gross % over last six months with data).
- On-time fulfillment rate (delivered on/before due date vs delivered late; incomplete past-due orders counted late).
- Low-stock alerts and urgent upcoming orders sourced from messaging subscribers.

Event Catalog (routing key → purpose)
- `bakewise.auth.tenant.provisioned.v1`: new tenant bootstrap for downstream initialization.
- `bakewise.auth.user.created.v1`: additional user onboarded.
- `bakewise.auth.session.login_audit.v1`: audit record for successful login.
- `bakewise.crm.customer.created.v1` / `updated.v1` / `soft_deleted.v1`: customer lifecycle.
- `bakewise.crm.customer.note_appended.v1`: internal note history.
- `bakewise.crm.customer.metrics_snapshot.v1`: spend/open-order rollup for dashboard cache.
- `bakewise.inventory.stock_item.created.v1` / `updated.v1` / `soft_deleted.v1`: stock catalog changes.
- `bakewise.inventory.stock_category.updated.v1`: category definitions assigned/updated (multi-tag metadata).
- `bakewise.inventory.purchase.recorded.v1` / `modified.v1`: purchase capture/corrections.
- `bakewise.inventory.stock_level.changed.v1`: level projections for alerts.
- `bakewise.inventory.stock.alert_triggered.v1` / `alert_cleared.v1`: low-stock lifecycle.
- `bakewise.inventory.audit.event_logged.v1`: manual adjustment audits.
- `bakewise.inventory.price_trend.updated.v1`: refreshed per-item, per-supplier cost trend snapshot.
- `bakewise.inventory.waste.logged.v1`: waste entry captured; drives metrics and audit history.
- `bakewise.recipes.recipe.versioned.v1`: new recipe snapshot for costing.
- `bakewise.recipes.variant.mapping_updated.v1`: variant definitions changed.
- `bakewise.recipes.audit.event_logged.v1`: recipe adjustments.
- `bakewise.orders.order.created.v1` / `updated.v1` / `status_changed.v1`: order lifecycle.
- `bakewise.orders.order.due_date_changed.v1`: reschedule events.
- `bakewise.orders.payment.recorded.v1`: deposit or settlement added.
- `bakewise.orders.pricing.margin_adjusted.v1`: profit override applied.
- `bakewise.orders.fulfillment.completed.v1`: delivery recorded.
- `bakewise.orders.audit.event_logged.v1`: other manual order edits.
- `bakewise.production.plan.generated.v1`: production plan ready for a given date.
- `bakewise.production.plan.finalized.v1`: baker approves/locks the plan.
- `bakewise.production.task.status_changed.v1`: task progress event for staff assignment tracking.
- `bakewise.analytics.report.saved.v1`: user saved or updated a custom analytics report configuration.
- `bakewise.analytics.report.deleted.v1`: saved report removed.
- `bakewise.metrics.monthly.refresh_requested.v1`: gateway requests recompute.
- `bakewise.metrics.monthly.snapshot_ready.v1`: metrics payload delivered.
- `bakewise.audit.record.created.v1`: normalized audit entry persisted.

Nx Tag Enforcement
- Scopes (`scope:*`): `scope:gateway`, `scope:auth`, `scope:customers`, `scope:inventory`, `scope:recipes`, `scope:orders`, `scope:production`, `scope:dashboard`, `scope:shared`.
  - Rule: Applications/libs may import from their own scope or from `scope:shared` only; cross-scope imports between services are disallowed.
- Types (`type:*`): `type:service`, `type:feature`, `type:data-access`, `type:ui`, `type:util`, `type:contract`, `type:messaging`, `type:errors`.
  - `type:service` (Nest apps) can import `type:feature`, `type:data-access`, `type:util`, `type:contract`, `type:messaging`, `type:errors` within the same scope or from `scope:shared`.
  - `type:feature` libs cannot depend on `type:service`.
  - `type:contract` and `type:errors` must live in `scope:shared` and cannot consume service-scoped code.
- `libs/ui-charts` tagged `scope:shared,type:ui`; only `scope:dashboard` (and future analytics service) may depend on it.
- Enforce via `nx.json` `tags`/`implicitDependencies` plus lint rules so Nx blocks disallowed imports.

Open Questions
- Shared exception-handling strategy (how services translate common errors from `libs/common-errors` into HTTP responses).
- Timeline for extracting dashboard aggregation into its own service and defining boundary contracts.

Delta Log
- 2025-11-01: Added Cognitive Architecture Pattern to `AGENTS.md`; initialized memory/docs templates and TODO.
- 2025-11-01: Pinned Node to 20.17.0; scaffolded stubs for apps (`api-gateway`, `frontend`, `service-orders`) and libs (`contracts`, `database`, `auth`); added base ESLint and Jest configs.
- 2025-11-01: Selected Prisma ORM, added shared helpers/scripts, and deferred schema definitions until microservices are built. Persistence guidance updated for per-service databases.
- 2025-11-02: Documented v1 service boundaries, tenant flow, dashboard KPIs, RabbitMQ routing conventions, and event catalog aligned with Core PRD clarifications.
- 2025-11-02: Added production planning service scope, waste logging extension, schema updates, event catalog changes, and test expectations for capacity planning and spoilage tracking.
