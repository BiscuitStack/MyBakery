# BakeWise — Core Product Requirements Document (PRD)

**Document Type:** Core PRD (Foundational Release)
**Version:** 1.0
**Date:** 2025-11-01
**Author / Product Owner:** Keenan Molver
**Implementation Agent:** Codex (LLM)
**Monorepo:** `bakewise` (private, Nx workspace)
**Runtime Target:** Node 20+
**Frontend:** Next.js
**Backend:** NestJS microservices
**Database:** Postgres (per service, per tenant)
**Messaging:** RabbitMQ
**Primary Deployment Targets:** Local dev (Docker/K8s), AWS ECS (per service)

---

## 1. Purpose

Small bakeries operate from memory and WhatsApp. This leads to:

* Missed or forgotten orders.
* Running out of ingredients at the wrong time.
* Guessing prices without knowing profit.
* No single daily view of “what do I have to bake today.”

BakeWise exists to solve those problems for one bakery first, then scale to many bakeries.

If we ship nothing else, the platform must:

1. Stop missed orders.
2. Warn about stock problems.
3. Help set (and justify) the right selling price.

This PRD defines only what is required to make those 3 outcomes possible.
Everything else will be handled later as separate epics.

This PRD also establishes the permanent architectural boundaries: tenancy, services, data flow, and UI surfaces Codex must implement first.

---

## 2. Core User Stories (must be delivered in v1)

### 2.1 Do not let me forget an order

* As a baker/manager, I want to see all orders due today and tomorrow the moment I log in.
* I want to drag an order to a different date if the customer changes pickup/collection.
* I want a clear status for each order: `PENDING`, `READY`, `DELIVERED`.

**Acceptance:**

* Dashboard shows “Today”, “Tomorrow”, “Upcoming”.
* Each order has a `dueDate`.
* Drag + drop updates that `dueDate` and persists.
* No order can be “orphaned” (everything appears on the calendar somewhere).

---

### 2.2 Warn me if I can't fulfill what's due

* As a baker, I want to know if I don’t have enough ingredients to fulfill what’s due today/tomorrow.
* When I log a purchase (e.g. restocking flour, eggs, butter), I want the warning to clear.

**Acceptance:**

* System tracks ingredient quantities and thresholds.
* Dashboard shows “Low Stock / Blocking Stock.”
* After I enter new purchases, low-stock alerts update.

---

### 2.3 Help me price properly

* When I create an order, I want to see:

    * The calculated cost to produce it (based on recipe ingredients and actual prices I paid).
    * A recommended selling price (markup).
    * The profit and margin %.
* I want to be able to override the selling price for a “good customer,” but still see the new margin.

**Acceptance:**

* System can cost a recipe using:

    * Latest known ingredient prices.
    * Unit conversion (200g out of 1kg costs 20% of that 1kg price).
* UI shows cost, suggested sell price, and profit R + %.
* Manual override is allowed; final profit is recalculated in real time.
* Baker can tweak either final price, target profit value, or target margin %; system keeps all three in sync.
* Payment status is set during capture (`UNPAID`, `DEPOSIT_RECEIVED`, `PAID`) with deposit amount recorded and additional payments logged against the order.

---

### 2.4 Keep production on track

* As a baker, I want to group orders into production batches so I know exactly what to prep and bake each day.
* I want to see whether my ovens and mixers can handle the workload and adjust batch timing if needed.
* I want a clear list of production tasks for my team with due times.

**Acceptance:**

* Orders scheduled for a day produce a consolidated production plan with named batches (e.g. “Chocolate Cake – 3x batch”).
* Production plan shows prep/bake tasks with durations and assigned equipment.
* UI flags capacity conflicts (overlapping tasks exceeding equipment slots) and lets the baker adjust timing.
* Staff can view their assigned tasks for today with status (`PENDING`, `IN_PROGRESS`, `COMPLETE`).

---

### 2.5 Track waste and spoilage

* As a baker, I want to capture when ingredients or finished goods go to waste so I understand the cost.
* I want to know which items are being wasted most, and why.
* I want waste to influence my profitability view for the month.

**Acceptance:**

* I can quickly log waste for any stock item, including quantity, reason, and location.
* Waste logs update inventory levels and publish to the dashboard within seconds.
* Dashboard shows “Waste This Month” value and highlights top waste reasons.
* Waste appears in audit history so I can review who logged it and when.

---

### 2.6 Summary of "must work day one"

If we can:

1. Capture stock and its real cost,
2. Build recipes from that stock,
3. Create orders from those recipes,
4. See those orders on the calendar with due dates,
5. Generate a production plan with resource visibility,
6. Capture waste so profitability reflects reality,

then BakeWise Core is successful.

---

## 3. Scope of the Core Release

The Core Release includes these eight pillars:

1. **Multi-tenant Auth**
2. **Customers**
3. **Orders + Calendar**
4. **Inventory / Stock + Purchases**
5. **Recipes + Costing**
6. **Operational Dashboard**
7. **Production Planning & Capacity**
8. **Waste & Spoilage Management**

All other functionality (advanced analytics, billing, super admin, delivery routing, etc.) is explicitly OUT OF SCOPE for the Core PRD and will be delivered as future epics.

---

## 4. Pillars (What Codex Must Build in v1)

Each pillar below defines:

* Why this is required in Core,
* What is in scope for Core,
* What is out of scope (future epic).

---

### 4.1 Multi-tenant Auth (Auth & Tenancy Service)

**Why this is Core**
We are building a SaaS. Each bakery is a tenant. We cannot retrofit multi-tenancy later.

**In Scope (must implement now):**

* `Tenant` = bakery.
* `User` belongs to exactly one tenant.
* User has a role: `owner`, `manager`, or `user`.
* Tenant provisioning happens through a minimal Auth API guarded by a shared secret; each call creates the tenant, default markup (25%), and an owner user.
* Login flow resolves tenant via the bakery subdomain (e.g. `acme.bakewise.app`); users submit `username` + `password` only.
* After login, a JWT is issued. That JWT MUST include:

    * `tenantId`
    * `role`
* Every backend request from the frontend goes through the Gateway with that JWT.
* Gateway forwards `tenantId` via header; services must ignore any client-provided tenant context and scope all queries by the resolved `tenantId`.

**Out of Scope (future epics):**

* Plans / feature flags / usage metering.
* Super Admin suspension / billing / enforcement UI.
* Trial, invoice, plan management.

**Notes to Codex:**

* Password hashing: Argon2 or Bcrypt.
* No cross-tenant data leakage is ever acceptable.
* All tables in all services include a `tenantId` column.
* All service-to-service traffic (including RabbitMQ) uses TLS; sensitive data encrypted at rest.
* Tenant markup defaults to 25% and is fixed in v1 (no per-tenant UI to change it yet).
* Every request past login must include a valid Bearer JWT; gateway enforces authorization before touching downstream services.

---

### 4.2 Customers (Customer / CRM Service)

**Why this is Core**
Orders must belong to an actual person, and we need context on that person (spend, difficulty, etc.).

**In Scope:**

* Create customer:

    * name
    * phone / email
    * internal rating (e.g. “difficult”, “VIP”)
    * private notes
* View customer details:

    * total spent (lifetime)
    * past orders list
    * last order date
    * currently open orders

**Out of Scope:**

* Automated messaging.
* Loyalty tiers / points.
* Marketing workflows.

**Notes to Codex:**

* Customer notes are internal only.
* We must be able to read “is this client a problem client?” at a glance.

---

### 4.3 Orders + Calendar (Orders Service + Calendar UI in Dashboard)

**Why this is Core**
This prevents missed work. This is the daily driver.

**In Scope:**

* Create Order:

    * select `Customer`
    * choose one or more sellable items (products/variants)
    * set quantity
    * assign `dueDate` (pickup/delivery date)
    * set status: `PENDING`, `READY`, `DELIVERED`
    * capture payment status: `UNPAID`, `DEPOSIT_RECEIVED`, `PAID`
    * record initial deposit amount when payment status is `DEPOSIT_RECEIVED`
    * maintain a payment ledger so subsequent deposits or settlements can be logged
    * optional internal notes
* Calendar View:

    * Calendar shows all orders by `dueDate`.
    * Must support “Today”, “Tomorrow”, “Upcoming” groupings.
    * Drag-and-drop an order to a new date. That updates the order’s `dueDate`.
* Dashboard must clearly show:

    * orders due today
    * orders due tomorrow
    * upcoming orders list

**Out of Scope:**

* Delivery routing / driver assignment.
* Payment reconciliation beyond the basic deposit ledger.

**Notes to Codex:**

* Calendar is not a passive display; it is an interactive surface.
* Changing dates in the calendar must persist back to Orders service.

---

### 4.4 Inventory / Stock + Purchases (Inventory Service)

**Why this is Core**
We cannot calculate cost or warn about shortages unless we understand ingredients, stock levels, and purchase prices.

**In Scope:**

* Stock item definition:

    * You CANNOT record a purchase for something that hasn’t been defined.
    * A stock item includes:

        * name (e.g. “Flour”),
        * brand or supplier label (“Brand A”),
        * pack size / variant (`500g`, `1kg`, `2kg`, etc.),
        * base unit for costing (g, ml, each),
        * low-stock threshold (e.g. “alert me if below 100g”),
        * one or more categories (e.g. “Milk”, “Dairy”) so similar items can be grouped.
* Record Purchase flow:

    * Enter multiple purchase lines at once.
    * For each line:

        * choose a category (filters the list of items) and then an existing stock item
        * quantity purchased
        * total actually paid
        * ability to override calculated total (e.g. “2-for-1 special”)
    * Optional invoice number / supplier/store info (Spar, Checkers, Costco, etc.).
    * Saving increases stock levels.
* Low-stock Alerts:

    * If a stock item’s current quantity < threshold, it should appear in Dashboard alerts.
    * After a purchase that replenishes it, alert should clear.
* Purchase History:

    * User can edit a mistake (e.g. wrong price).
    * Edit updates cost basis going forward.
    * System maintains price history per item (by supplier/store) for trend reporting.

**Out of Scope:**

* Supplier analytics beyond per-item price history (e.g. profitability by supplier, predictive analytics).
* Inventory valuation reporting.
* Multi-location warehouse tracking.

**Notes to Codex:**

* Data integrity is mandatory:

    * You are NOT allowed to create a purchase line for an undefined item.
* Quantities and units must support conversions later (g ↔ kg, ml ↔ L, etc.).
* Item categories drive UI selection; items can belong to multiple categories.
* Price history must be queryable per item and per supplier/store to show trends.

---

### 4.5 Recipes + Costing (Recipes Service)

**Why this is Core**
Accurate cost per order depends on knowing what goes into each product.

**In Scope:**

* Create Recipe:

    * Recipe metadata:

        * name (e.g. “Chocolate Cake”),
        * yield definition (e.g. “1 cake”, “12 cupcakes”).
    * Add line items:

        * ingredients (stock items),
        * OR sub-recipes (like frosting).
    * For each line item:

        * quantity + unit
        * system automatically calculates cost using the latest known price for that ingredient
        * system understands partial usage (200g of a 1kg bag should cost 20% of that bag price)
    * Optional “waste %” should be included in cost calculation.
* Variant mapping:

    * One base recipe can be linked to multiple selling variants (box of 6 cupcakes vs box of 12) without duplicating the recipe.
* Versioning:

    * Saving a recipe creates a snapshot / version so we know what the cost basis was at that moment.

**Out of Scope:**

* Labor cost, time cost.
* Nutritional info, allergen declarations.
* Complex scaling UI (0.5x, 2x batch multipliers). Nice if we can, but not required for Core.

**Notes to Codex:**

* This service must expose a “give me the cost breakdown for variant X at quantity Y” endpoint, which Orders will consume when pricing an order.
* Use a shared units library for standard mass/volume conversions (`g↔kg`, `ml↔l`, `each`); avoid bespoke conversions until future epics request them.

---

### 4.6 Operational Dashboard (Frontend + Gateway Aggregation)

**Why this is Core**
This is the “morning view” for the baker. It ties everything together.

**In Scope:**

* Dashboard layout (Concept 2 structure):

    * Top summary cards:

        * Total Orders Today
        * Orders Tomorrow
        * Low Stock Items (count)
        * Current Month Gross Profit (value; orders with `DEPOSIT_RECEIVED`/`PAID` whose `dueDate` falls this month)
        * Estimated Gross Profit (orders due this month with payment status `DEPOSIT_RECEIVED` or `PAID`, regardless of delivery state)
        * Outstanding Balance (current month orders: final price minus payments received)
        * Month-over-Month Change (absolute + % vs prior month)
        * Six-Month Average Gross Margin (% across last six months with data)
        * On-Time Fulfillment Rate (delivered on/before due date; overdue incomplete orders count as late)
    * Main split view:

        * Left: Calendar (Day / Week / Month toggle)
        * Right: Alerts & Warnings panel:

            * Low stock alerts
            * Urgent upcoming orders (“pickup in <24h”)
* Order drill-in:

    * Clicking an order shows:

        * items
        * calculated cost
        * suggested sell price
        * final chosen price
        * profit (R and %)
        * payment status + ledger of deposits/payments + outstanding balance
* Drag-and-drop rescheduling from this view.

**Out of Scope:**

* Historical charts over time (7-day sales trend, etc.).
* Export / print / PDF.
* Per-role customizable dashboards.
* Global analytics / forecasting.

**Notes to Codex:**

* This must feel like a live control panel, not a PDF.
* Surfaces all 3 “must-solve” pains:

    * “What must I bake?”
    * “Do I have ingredients?”
    * “Am I charging enough?”
* Financial metrics ignore `UNPAID` orders; overdue orders without delivery should still impact the on-time rate once they pass `dueDate`.
* All month-based metrics use calendar months (1st through last day).

---

### 4.7 Production Planning & Capacity (Production Service + Gateway UI)

**Why this is Core**
Knowing what to prep, when, and on which equipment is the difference between smooth mornings and chaos. Without a plan, orders still get missed.

**In Scope:**

* Generate daily production plans from confirmed orders:

    * Aggregate line items into production batches (e.g. 3× `Chocolate Celebration Cake`).
    * Calculate ingredient pulls per batch.
* Task timeline:

    * Each batch defines prep/bake/decorate/pack tasks with start/end durations.
    * Assign default equipment (ovens, mixers) or mark as manual.
    * Surface conflicts when overlapping tasks exceed available equipment concurrency.
* Staff assignment:

    * Allow assigning tasks to users with optional notes.
    * Track task status (`PENDING`, `IN_PROGRESS`, `COMPLETE`).
* Dashboard integration:

    * Today’s production plan visible alongside calendar.
    * Conflict badges prompt adjustment actions.

**Out of Scope:**

* Automated optimization/simulation (AI-based scheduling, what-if analysis).
* Multi-location production balancing.
* Labor cost estimation.

**Notes to Codex:**

* Planning logic should live in a dedicated production service to keep scope isolated.
* Recipes must expose prep/bake metadata (durations, equipment type) for batching.
* Emissions should include per-task audit logs when status or assignments change.

---

### 4.8 Waste & Spoilage Management (Inventory Service Extension)

**Why this is Core**
Waste erodes profit and stock confidence. Capturing it ensures pricing, alerts, and decision-making remain grounded in reality.

**In Scope:**

* Waste logging:

    * API/UI to log waste for any stock item or finished goods batch.
    * Capture quantity, unit, reason (`EXPIRED`, `DAMAGED`, `OVERPRODUCTION`, `OTHER`), optional note, and disposal location.
    * Optionally attach to related production batch.
* Inventory impact:

    * Deducts from on-hand stock immediately.
    * Emits waste events so dashboards and analytics update in near real time.
* Dashboard & reporting:

    * Show “Waste This Month” card with value and count.
    * Provide breakdown by reason and item.
* Audit & permissions:

    * Waste entries recorded with actor info; editable only by owner/manager.

**Out of Scope:**

* Automatic waste prediction or machine learning.
* Regulatory disposal workflows.
* Refund/credit automation tied to waste.

**Notes to Codex:**

* Waste uses the same soft-delete/audit policies as other entities.
* Ensure waste adjustments cannot drive stock negative without explicit override (future epic).

---

### 4.9 Business Analytics & Reporting (Dashboard Analytics Module)

**Why this is Core**
Owners need macro trends to steer pricing, staffing, marketing, and purchasing decisions. Insightful analytics turns BakeWise from an operational console into a strategic tool.

**In Scope:**

* Standard dashboards:

    * Revenue vs. cost vs. profit trend (daily/weekly/monthly).
    * Product performance (top/bottom items by quantity and profit).
    * Customer analysis (repeat vs. new customers, spend by rating/VIP).
    * Waste vs. production (waste cost as % of production cost over time).
    * Channel mix (orders/profit segmented by sales channel).
* Drilldown interactions:

    * Clicking any KPI surfaces a detailed chart with filters (time range, product, customer, channel).
* Custom report builder:

    * Let users choose metrics (revenue, cost, profit, margin, units, waste), dimensions (time, product, customer, channel, staff), and apply filters to create bespoke charts.
    * Users can add/remove series, switch chart type (line, bar, pie, stacked), and save configurations per user.
    * Reports support cloning and renaming; saved reports appear in a library.
* Visualization library:

    * Use a shared `libs/ui-charts` wrapper around Chart.js/Recharts to guarantee consistent theming and performance.
* Data freshness:

    * Charts indicate last updated timestamp and auto-refresh at least every 5 minutes (configurable later).

**Out of Scope:**

* Predictive analytics / machine learning forecasts.
* Export to PDF/CSV/Excel.
* Cross-tenant benchmarking or aggregated views across bakeries.

**Notes to Codex:**

* Analytics logic initially lives with dashboard aggregation but must be modular to migrate into a standalone service.
* Metrics API should expose flexible query parameters to support new dimensions without schema rewrites.
* Honor RBAC—staff may have read-only analytics, owners/managers get customization rights.

---

## 5. Non-Functional Foundations (must be built into Core)

These are not “nice to have later.” They are part of Core because they are structural.

### 5.1 Multi-tenancy enforcement

* Every table in every service includes `tenantId`.
* Every request is scoped by the `tenantId` extracted from the JWT.
* Frontend must always send requests through the API Gateway, never directly to services.
* Tenant inference happens via bakery subdomain; gateway must reject mismatches between subdomain and JWT `tenantId`.
* Provisioning API is protected by shared secret; never exposed publicly.
* No cross-tenant queries, ever.

### 5.2 Audit trail

We must be able to answer “who changed what, when” for:

* Order due date changes (drag-and-drop reschedule).
* Price overrides on orders.
* Payment events (deposits, settlements, status changes).
* Production task assignments and status changes.
* Manual edits to purchase history (fixing a wrong price).
* Waste logs (quantity, reason).

Store minimal structured audit records:

* `actorUserId`
* `tenantId`
* `entityType` (e.g. `ORDER`, `PURCHASE_LINE`)
* `entityId`
* `action` (e.g. `DATE_CHANGED`, `PRICE_OVERRIDE`, `PURCHASE_EDIT`)
* `timestamp`

UI for viewing audit logs is out of scope in Core, but the data must be written.

### 5.3 Soft delete

* No hard deletes for core entities.
* Entities (customer, order, stock item, purchase, recipe) must support:

    * `deleted` boolean
    * `deletedAt`
    * `deletedBy`
* We do NOT need restore flows in Core, but schema needs to allow it later.

### 5.4 Health & local deployment

* Each service exposes `/health` with basic info (service name, up state).
* The system must run locally using Nx + Docker (or local K8s).
* Each service must be independently containerized and deployable (future ECS).
* The Gateway must be the only externally exposed backend surface.
* All internal communication (HTTP/gRPC/WebSocket/RabbitMQ) terminates TLS; credentials/secrets encrypted at rest.

### 5.5 Testing baseline

Core needs working test scaffolding:

* Unit tests for service logic.
* Integration test for the “golden path”:

    1. Define stock item.
    2. Record a purchase (with override).
    3. Create a recipe using that stock.
    4. Create an order for a customer with that recipe.
    5. Verify cost/sell/ profit numbers.
    6. Verify the order appears in dashboard “Today/Tomorrow/Upcoming”.
    7. Generate the production plan and confirm tasks/equipment allocations for the order.
    8. Log waste against one stock item and assert inventory and dashboard metrics update.
* E2E test at the Gateway level that covers login → dashboard.

Target coverage can grow later. The test harness must exist now.

### 5.6 Error handling baseline

* All services must use the shared error registry in `libs/common-errors` for codes/messages.
* Errors surfaced to clients follow the unified error shape `{ status, code, message, details? }`.
* `/docs/error-catalog.md` (future) documents meanings and remediation guidance for each code.

---

## 6. Data Model Foundations (Core Minimum Schemas)

Codex must define Prisma schemas (and migrations) for at least the following tables/entities.
Every table below includes `id`, `tenantId`, timestamps, and soft-delete fields.

### 6.1 Auth / Tenancy

* `Tenant`

    * id
    * displayName / bakeryName
    * subdomain (e.g. `acme`; resolves tenant during login)
    * defaultMarkupPercent (decimal, defaults to 25)
* `User`

    * id
    * tenantId
    * username / email (login identifier)
    * passwordHash
    * role (`owner` | `manager` | `user`)

### 6.2 Customers

* `Customer`

    * name
    * contact info
    * rating (internal)
    * totalSpent (can be materialized or calculated)
    * lastOrderAt
* `CustomerNote`

    * customerId
    * note text
    * createdBy

### 6.3 Inventory

* `StockItem`

    * name (“Flour”)
    * brand / variant
    * packSize (“1kg bag”)
    * baseUnit (“g”, “ml”, “each”)
    * lowStockThreshold (numeric in baseUnit)
* `StockCategory`

    * name (e.g. “Milk”)
    * description?
* `StockItemCategory`

    * stockItemId
    * categoryId
* `StockPurchase`

    * supplier/store
    * invoiceNumber?
    * date
* `StockPurchaseLine`

    * purchaseId
    * stockItemId
    * quantityPurchased (in baseUnit or convertible)
    * totalPaid (what was actually paid, after specials)
    * derivedUnitCost
* (Optional helper / view) `StockLevel`

    * stockItemId
    * currentQuantity (in baseUnit)
* (Optional helper / view) `StockPriceTrend`

    * stockItemId
    * supplier/store
    * period (month)
    * averageUnitCost
    * minUnitCost
    * maxUnitCost

Editing a `StockPurchaseLine` must recalc the cost basis for future usage.

### 6.4 Recipes

* `Recipe`

    * name
    * yieldDescription (ex: “1 cake”, “12 cupcakes”)
    * wastePercent?
* `RecipeItem`

    * recipeId
    * componentType (`STOCK_ITEM` | `RECIPE`)
    * componentId (StockItem or Recipe)
    * quantity
    * unit
    * costAtSave (resolved cost for that quantity at the time)
* `RecipeVersion`

    * recipeId
    * serializedSnapshot of all RecipeItems + computed totals at save time
* `VariantMapping`

    * recipeId
    * variantName (e.g. “6-pack”, “12-pack”)
    * yieldMultiplier (e.g. 0.5, 1.0)

### 6.5 Orders

* `Order`

    * customerId
    * dueDate
    * status (`PENDING`, `READY`, `DELIVERED`)
    * paymentStatus (`UNPAID`, `DEPOSIT_RECEIVED`, `PAID`)
    * deliveredAt
    * notes
    * finalSellTotal
    * finalProfitTotal
    * finalMarginPercent
    * targetProfitValue
    * targetMarginPercent
    * outstandingBalance
* `OrderPayment`

    * orderId
    * amount
    * paymentType (`DEPOSIT`, `BALANCE`, `REFUND`)
    * receivedAt
    * recordedByUserId
* `OrderItem`

    * orderId
    * recipeReference / variantReference
    * quantity
    * costBasisCapturedAtOrderTime (the cost we calculated then)
    * suggestedSellPriceAtOrderTime
    * finalSellPriceChosen
    * profitValueAtOrderTime
    * profitPercentAtOrderTime

The `costBasisCapturedAtOrderTime` + `suggestedSellPriceAtOrderTime` lock the numbers so historical orders don't change if flour cost changes later.

### 6.6 Production

* `ProductionPlan`

    * date
    * status (`DRAFT`, `FINALIZED`)
    * conflictCount
* `ProductionBatch`

    * planId
    * recipeId / variantReference
    * quantity
    * ingredientPullSnapshot (JSON)
* `ProductionTask`

    * batchId
    * taskType (`PREP`, `BAKE`, `DECORATE`, `PACK`)
    * equipmentType (`OVEN`, `MIXER`, `MANUAL`, etc.)
    * scheduledStart
    * scheduledEnd
    * assignedUserId?
    * status (`PENDING`, `IN_PROGRESS`, `COMPLETE`)
    * conflictFlag
* `Equipment`

    * name
    * type
    * concurrencyCapacity (e.g. oven racks)

### 6.7 Waste Management

* `WasteLog`

    * stockItemId (or batch reference)
    * quantity
    * unit
    * reason (`EXPIRED`, `DAMAGED`, `OVERPRODUCTION`, `OTHER`)
    * note?
    * loggedByUserId
    * location?

---

## 7. Explicit Out-of-Scope Items (Future Epics)

The following are NOT part of Core PRD and will be specced later. Codex must NOT build them yet, only leave hooks:

* Super Admin Console (tenant lifecycle, plan management, suspension).
* Billing / plan enforcement / usage metering / feature flags.
* Advanced reporting dashboards (profit trend, customer spend over time, etc.).
* Exports (CSV / PDF / Excel).
* Supplier analytics beyond per-item price history (e.g. profitability comparisons, forecasts).
* Delivery routing, collection vs delivery workflow, courier assignments.
* Invoice generation, advanced payment tracking/reconciliation (beyond the simple deposit ledger).
* Notifications via WhatsApp/SMS/email.

These will each become their own epic PRDs and can extend existing services or introduce new ones.

---

## 8. Definition of Done for Core PRD

The Core PRD is considered implemented when all of the following are true:

1. I can log in as a specific bakery (tenant).
2. I can create a customer with notes and rating.
3. I can define stock items (with thresholds) and record a multi-line purchase, including price overrides.
4. After recording a purchase, low-stock alerts reflect the new levels.
5. I can create a recipe that uses those stock items, and the system calculates cost (with unit conversion and optional waste %).
6. I can create an order for a customer:

    * It pulls cost from the recipe,
    * It suggests a selling price,
    * I can override the price,
    * I can adjust the target profit value or margin % and the final price updates accordingly,
    * I can set the payment status, capture deposits (including top-ups), and see the outstanding balance update,
    * It shows me profit in R and %.
7. That order appears on the dashboard calendar, grouped under today / tomorrow / upcoming.
8. I can drag that order to a different date and the change persists.
9. The dashboard shows low-stock alerts if we’re below thresholds and surfaces the KPI cards for current month gross profit, estimated gross profit, outstanding balance, month-over-month change, six-month average gross margin, and on-time fulfillment rate.
10. A production plan is generated for today with batch breakdowns, equipment timeline, conflict indicators, and staff task statuses.
11. I can log waste for any stock item, see inventory adjust, and watch the “Waste This Month” metric update.

If all 11 items are working, BakeWise Core is ready. Future epics can then safely extend functionality without changing the fundamental architecture.

---

## 9. Mission Statement

**BakeWise Core =
“A tenant-safe operations console for a bakery that guarantees no forgotten orders, no last-minute stock panic, and no blind pricing.”**

Codex:

* Build only what is in scope in this Core PRD.
* Do not introduce abstractions, features, or surfaces outside these requirements.
* All future functionality will be layered on top through epic PRDs, not by mutating these foundations.
