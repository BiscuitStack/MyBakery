# Prisma Runbook (Auth & Inventory)

This runbook documents how to bring the new per-service Prisma schemas online once we are ready to wire persistence into the Auth/Tenancy and Inventory services. Until we execute these steps, both services continue to run against in-memory repositories.

## 1. Environment Preparation

1. Provision Postgres instances for each service (local Docker, dev Kubernetes, or managed instance). Each service maintains its own database.
   - For local development, run `docker compose up -d auth-db inventory-db` using the provided `docker-compose.yml` at the repo root. This starts Postgres containers on ports `5434` (auth) and `5435` (inventory).
2. Add the connection strings to your environment. Example:
   ```bash
   # .env.local
   AUTH_DATABASE_URL="postgresql://postgres:postgres@localhost:5434/auth?schema=public"
   INVENTORY_DATABASE_URL="postgresql://postgres:postgres@localhost:5435/inventory?schema=public"
   ```
   During automated tests (or when you want to keep the in-memory repositories), set `USE_IN_MEMORY_REPOSITORIES=true` so the services bypass Prisma even if the env vars exist.
3. Update `.env.example` (to be done when values are final) so teammates know which env vars to supply.

## 2. Validate Schemas

Run `prisma validate` against each schema before touching databases:
```bash
pnpm prisma validate --schema prisma/auth/schema.prisma
pnpm prisma validate --schema prisma/inventory/schema.prisma
```

## 3. Generate Prisma Clients

Once schemas are validated, generate the service-specific clients:
```bash
pnpm prisma:generate:auth
pnpm prisma:generate:inventory
```
Generation paths are already configured to emit into `libs/database/generated/auth-client` and `libs/database/generated/inventory-client`. After generation, replace the in-memory repositories with Prisma-backed adapters that use these clients.

## 4. Create and Apply Migrations

1. For local/dev development, run:
   ```bash
   pnpm prisma migrate dev --schema prisma/auth/schema.prisma --name init
   pnpm prisma migrate dev --schema prisma/inventory/schema.prisma --name init
   ```
   This will create migration files under `prisma/migrations/*` scoped per schema and apply them to the configured database.
2. CI/CD (once wired) should run:
   ```bash
   pnpm prisma migrate deploy --schema prisma/auth/schema.prisma
   pnpm prisma migrate deploy --schema prisma/inventory/schema.prisma
   ```
   to apply outstanding migrations in non-interactive environments.
3. Use `prisma migrate diff` to review SQL prior to running migrations in production:
   ```bash
   pnpm prisma migrate diff \
     --from-empty \
     --to-schema-datamodel prisma/inventory/schema.prisma \
     --script
   ```

## 5. Replace In-Memory Repositories

After migrations and client generation succeed:

1. Implement Prisma-backed repositories for Auth (users/tenants) and Inventory (stock, purchases, waste).
2. Use dependency injection to toggle between in-memory repositories (for tests or local fallback) and Prisma implementations. The current module provider in `apps/service-inventory/src/app/inventory.module.ts` will need to select the Prisma implementation when `INVENTORY_DATABASE_URL` is defined.
3. Add integration tests that spin up a Postgres test container (or use `prisma db push` against an ephemeral database) to ensure repositories behave correctly.

## 6. Update Tooling & Docs

- Update `docs/architecture.md` with any schema changes and new migrations.
- Ensure `nx` targets or CI scripts call the new Prisma generate commands before running tests that depend on the clients.
- Document any seed data or fixture setup required for local development in this runbook or a dedicated seeding guide.

## 7. Ongoing Maintenance

- Every schema change must be accompanied by a migration and updated Prisma client.
- Regenerate clients (`pnpm prisma:generate`) whenever the schema changes so TypeScript types stay in sync.
- Monitor Prisma warnings/errors in CI; failing to generate clients or apply migrations should block the pipeline.
