# BakeWise Expansion Research

> NOTE: Cloud-based auxiliary agents are not available in this environment. Findings below consolidate internal domain knowledge with publicly documented bakery SaaS patterns (e.g. ERP-style manufacturing modules, hospitality POS systems) to outline future opportunities for BakeWise.

## Additional Pain Points & Solution Directions

### 1. Batch Production & Capacity Planning
- **Pain**: Bakers juggle overlapping recipes that compete for oven/retarder space. Manual spreadsheets make it easy to over-book capacity or miss prep steps (autolyse, proofing).
- **Approach**:
  - Introduce a `Production Planning` module that aggregates orders by due date, groups them into batches (e.g., “Cupcake Base – 3x batch”), and maps prep/oven tasks on a timeline.
  - Extend Recipes service with task metadata (prep duration, bake time, equipment) and emit production requirements.
  - New `production` microservice (future epic) consumes order events, generates schedule suggestions, and warns when capacity is exceeded.
- **UI Concept**: Calendar-like Gantt view with swimlanes per oven/mixer. Drag-to-adjust batch start times. Conflict badges highlight over-capacity slots.

### 2. Waste & Spoilage Tracking
- **Pain**: Ingredients expire or finished goods go unsold; owners lack visibility into waste cost vs. gross profit.
- **Approach**:
  - Extend Inventory service with waste logging endpoints (`POST /inventory/waste`) capturing item, quantity, reason, and disposal date.
  - Emit `bakewise.inventory.waste.logged.v1` to feed dashboards and recipe costing adjustments.
  - Dashboard adds a “Waste This Month” card and integrates waste into margin analytics.
- **UI Concept**: Quick “Log Waste” modal accessible from stock alerts, pre-filling the related stock item and offering reason presets (Expired, Damaged, Overproduction).

### 3. Supplier Lead Times & Smart Reordering
- **Pain**: Stock-outs occur because suppliers need 2–3 days lead time; manual reminders fail.
- **Approach**:
  - Track average delivery lead times per supplier by comparing purchase order date vs. stock receipt.
  - Add reorder-point calculations (threshold + upcoming production usage) and generate recommended purchase lists.
  - Optional integration with email/webhook to send templated purchase requests.
- **UI Concept**: “Reorder Suggestions” panel showing next 7 days usage, current on-hand, recommended order quantity, and lead-time countdown.

### 4. Allergen & Compliance Labeling
- **Pain**: Bakeries must disclose allergens and dietary suitability (vegan, gluten free). Tracking manually creates risk.
- **Approach**:
  - Augment StockItem and Recipe models with allergen flags (`contains_gluten`, `contains_nuts`, etc.) and dietary tags.
  - Provide auto-generated labels for each product variant, exportable to label printers.
  - Orders UI surfaces warnings when combining allergens in mixed boxes.
- **UI Concept**: “Product Label Preview” sidebar showing ingredient list, allergen icons, and QR code linking to a hosted info page.

### 5. Staff Scheduling & Task Assignment
- **Pain**: Small teams rely on WhatsApp to assign prep/pack/delivery tasks, causing missed handoffs.
- **Approach**:
  - Lightweight scheduling module that maps production tasks (generated from orders) to staff members with start/end times.
  - Mobile-friendly view listing today’s assigned tasks with checklists and completion timestamps.
  - Event stream (`bakewise.staff.task.completed.v1`) updates dashboard and audit trail.
- **UI Concept**: Kanban board with columns (Prep, Bake, Decorate, Delivery). Staff drag tasks as they progress; avatars show ownership.

### 6. Sales Channel Consolidation
- **Pain**: Orders arrive via Instagram DM, Shopify, and walk-ins. Manual transcription leads to errors.
- **Approach**:
  - Build connectors (future epics) to ingest orders from common channels (Shopify, WooCommerce) via webhooks.
  - Normalize into Orders service using the same costing workflow, tagging source channel.
  - Dashboard filters by channel; analytics measure conversion and profit per channel.
- **UI Concept**: Orders table with color-coded channel chips (Shopify, Walk-in, WhatsApp). Quick actions to confirm pricing or schedule production.

### 7. Seasonal Demand Forecasting
- **Pain**: Holiday spikes (Valentine’s, Mother’s Day) catch bakers off guard; they lack data-driven prep guidance.
- **Approach**:
  - Metrics service compiles historical order volume and ingredient usage per season.
  - Provide forecast widgets (simple moving average / year-over-year comparison) that push suggested stock increases into the reorder module.
  - Alerts when upcoming holidays show insufficient scheduled capacity.
- **UI Concept**: “Seasonal Outlook” card—line chart of last 3 years vs. projected volume, with recommended prep quantities for top products.

### 8. Equipment Maintenance Reminders
- **Pain**: Overlooked maintenance (oven calibration, mixer servicing) leads to downtime.
- **Approach**:
  - New `Equipment` entity associated with production tasks and usage hours.
  - Track maintenance intervals and send reminders based on usage counts derived from production batches.
  - Maintenance logs feed the audit trail.
- **UI Concept**: Maintenance dashboard listing equipment status (OK, Due Soon, Overdue) with ability to log service visits.

## Implementation Considerations
- All features respect existing constraints: per-service databases, RabbitMQ messaging, TLS, and soft deletes.
- Prioritize epics that reinforce the three core outcomes (no missed orders, stock confidence, pricing clarity) before expanding into adjacent workflows (e.g., scheduling, compliance).
- Mockups should be delivered as annotated wireframes (Figma/Balsamiq) or textual UI specs; coordinate with design resources since automated mockup agents are unavailable in this environment.
