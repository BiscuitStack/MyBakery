# Repository Guidelines

Concise contributor guide for the BakeWise monorepo managed by Nx. This covers structure, commands, quality gates, and deployment targets.

## Core Execution Principles
- Operate calmly; ship small, clear, deterministic changes.
- Always produce the simplest viable solution.
- Never over-engineer — introduce abstractions only when explicitly required.
- Think critically; question assumptions before implementing.
- Ask clarifying questions until the problem is fully understood.
- Follow the deterministic lifecycle:  
  `plan → scaffold → test → commit → PR`
- Keep PRs small and tied to specific **PDR sections**.
- Update `/codex/TODO.md` and append deltas to `docs/architecture.md`.
- Adhere strictly to time-boxed tasks.
- Continuously update context/memory files for session continuity.

## Project Structure & Module Organization
- Monorepo (Nx): applications in `apps/`, shared code in `libs/`, docs in `docs/`, deployment in `deploy/`.
- Apps: `apps/api-gateway` (NestJS), `apps/frontend` (Next.js), `apps/service-<name>` (NestJS microservices over RabbitMQ).
- Libs: domain and shared utilities (e.g., `libs/database`, `libs/contracts`, `libs/auth`). Enforce boundaries via Nx tags.

## Build, Test, and Development Commands
- Graph and affected: `nx graph`, `nx affected -t lint,test,build`.
- Serve locally: `nx serve api-gateway`, `nx serve frontend`, `nx serve service-orders`.
- Unit tests: `nx test <project>`; E2E: `nx e2e <project-e2e>`.
- Build: `nx build <project>`; Lint/Format: `nx lint <project>`, `nx format:check`.
- Docker (example): `docker build -t bakewise/<project>:dev -f apps/<project>/Dockerfile .`.

## Coding Style & Naming Conventions
- Language: TypeScript. Indentation: 2 spaces; max line ~100 chars.
- Must compile, lint cleanly, and pass all health checks. 
- Naming: files `kebab-case.ts`, variables/functions `camelCase`, classes `PascalCase`, constants `SCREAMING_SNAKE_CASE`.
- Tooling: Prettier + ESLint (`@nrwl/nx`, `@typescript-eslint`); keep CI identical to local.
- No cascade deletes; enforce soft delete (`deleted`, `deletedAt`, `deletedById`).
- IDs: UUID v4 strings.
- Use unified error shape:  
  `{ status, code, message, details? }`
  
## Testing Guidelines
- Frameworks: Jest for unit/integration; Supertest for NestJS e2e; Playwright/Cypress for frontend e2e.
- Layout: `apps/<project>/src/**/*.spec.ts`, e2e as `*.e2e-spec.ts` in dedicated e2e app.
- Targets: ≥90% coverage for core libs (`libs/*`) and all services. Add regression tests for fixes.

## Commit & Pull Request Guidelines
- Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`). One concern per commit.
- PRs: description, linked issues, testing steps, screenshots for UI. Require `nx affected -t lint,test,build` green.
- Each PR includes:
  - Example requests/responses
  - Linked tests + API docs
- Update `/codex/TODO.md` daily to track feature progress
- Update `docs/architecture.md` with relevant changes.

## Security & Configuration Tips
- Never commit secrets. Dev via per-app `.env` and a tracked `.env.example`. Kubernetes uses Secrets; mount via env.
- Contracts (RabbitMQ message shapes) live in `libs/contracts`; version changes require coordinated updates.

## Deployment & Environments
- Local (staging/dev branches): use Docker Desktop Kubernetes context. Example: `kubectl config use-context docker-desktop` then `helm upgrade --install bakewise deploy/chart -f deploy/values.dev.yaml`.
- Production (main): deploy to EKS. Example: `kubectl config use-context <eks-context>` then `helm upgrade --install bakewise deploy/chart -f deploy/values.prod.yaml`.
- Dependencies: Postgres and RabbitMQ provisioned via Helm subcharts; configure via `values.*.yaml`.

## Agent-Specific (Nx) Instructions
- Respect Nx boundaries and tags; import shared code via `@bakewise/<lib>`.
- Prefer `nx g` to scaffold projects/libs and keep project.json targets consistent.
- Optimize with `nx affected` and caching; avoid cross-cutting renames without coordination.
- Prisma is the standard ORM. Each microservice owns its database/schema—delay Prisma model definitions until the service is implemented.

## Cognitive Architecture Pattern
Agents must operate using a lightweight cognitive architecture loop to keep work deterministic and transparent:

- Perceive: Rapidly scan the repo and context (AGENTS.md, docs, Nx config) before acting.
- Plan: Outline small, verifiable steps and keep exactly one step in progress. Revise plans as reality changes.
- Act: Make the smallest viable change. Group related shell actions; use `nx g` for scaffolding and `apply_patch` for edits.
- Verify: Prefer targeted checks first (lint/tests/build for the touched project, then `nx affected -t lint,test,build`).
- Reflect: Compare outcomes to acceptance criteria; adjust the plan if gaps remain.
- Document: Append concise deltas to `context/memory/*`, update `/codex/TODO.md`, and add relevant notes to `docs/architecture.md`.

Guidance:
- Keep outputs concise; externalize conclusions, plans, and results rather than raw chain-of-thought.
- Ask clarifying questions early when requirements are ambiguous; otherwise proceed with small, reversible steps.
- Favor repeatable commands and deterministic edits so others can retrace the work.

## Memory System
Persistent memory maintained under `context/memory/`:

| File | Purpose |
|------|----------|
| `working.txt` | Active tasks, decisions, and blockers |
| `procedural.txt` | Validated workflows and runbooks |
| `semantic.txt` | Domain concepts and architectural rationale |
| `episodic.txt` | Chronological event log of major actions/refactors |

Agents must update these as they resolve ambiguities, complete tasks, or detect new architectural patterns.
