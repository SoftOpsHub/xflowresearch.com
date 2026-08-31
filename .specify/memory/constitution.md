<!--
Sync Impact Report
- Version change: 1.0.0 → 1.1.0
- Bump rationale (1.1.0): MINOR — added a "Branching (NON-NEGOTIABLE)" subsection
  to Development Workflow (no direct pushes to main; develop is the integration
  branch; ship via PR from develop into main) and aligned the Governance
  amendments clause with it.
- Prior ratification (1.0.0): First concrete ratification of the constitution for
  xflow-research; all placeholder principles replaced with project-specific,
  testable rules. MAJOR baseline per initial adoption.
- Principles defined:
  1. Static-First, No Backend
  2. Component-Based Architecture
  3. Type Safety & Automated Quality Gates
  4. Test the Behavior That Ships
  5. Accessible, Responsive UI
- Added sections: Technology Constraints; Development Workflow; Governance
- Removed sections: none (template placeholders resolved)
- Templates reviewed:
  - .specify/templates/plan-template.md ✅ generic "Constitution Check" gate, compatible
  - .specify/templates/spec-template.md ✅ no constitution coupling
  - .specify/templates/tasks-template.md ✅ no constitution coupling
  - CLAUDE.md ✅ already aligned (static site, component architecture, banned deps)
- Follow-up TODOs: none
-->

# XFLOW Research Constitution

XFLOW Research is a static website with no backend, built as a fully static export.
This constitution defines the non-negotiable rules for how the codebase is designed,
built, and reviewed.

## Core Principles

### I. Static-First, No Backend

The site MUST build and ship as a fully static export (`next build` with
`output: 'export'` producing `out/`). There is no server, no authentication, no API
layer, and no database.

- No server-only code, Server Actions, route handlers (`app/api/`), middleware
  (`proxy.ts`), or `next/headers` usage.
- No data fetching that assumes a first-party backend. Third-party data MUST be
  fetched client-side with native `fetch`, or baked in at build time.
- Secrets MUST NOT be introduced; there is nowhere safe to keep them.

Rationale: the deployment target is a static host. Any backend dependency breaks the
build contract and the hosting model.

### II. Component-Based Architecture

Code is organized by **what a file is**, not by feature.

- `app/` contains routing, layout, and metadata only — it MUST stay thin. Real UI
  lives in `src/components/`.
- `src/` layout is fixed: `components/ui/` (shadcn/Radix primitives),
  `components/layout/`, `components/<Name>.tsx` (shared components), `hooks/`,
  `lib/` (pure helpers), `store/` (Zustand, one file per concern), `test/`.
- Default to Server Components. `'use client'` goes on the leaf that needs
  interactivity, never on a layout or page.
- Static assets live in `public/` and are referenced by path.

Rationale: a predictable, type-based structure keeps a small research codebase
navigable and avoids premature feature silos.

### III. Type Safety & Automated Quality Gates

TypeScript runs in strict mode and the automated gates are mandatory, not advisory.

- `pnpm typecheck`, `pnpm lint`, and `pnpm test` MUST all pass before a change is
  considered done.
- No `any` and no `as` casts at data boundaries; validate external/untyped input
  with Zod.
- Formatting is Prettier; commits follow Conventional Commits (enforced by
  commitlint). Husky + lint-staged run on commit and MUST NOT be bypassed.
- Package manager is **pnpm** only.

Rationale: the gates are the safety net that lets a solo/small team move fast
without regressions.

### IV. Test the Behavior That Ships

Every behavior change ships with the test that proves it.

- Components and hooks: Vitest + React Testing Library, colocated in a `tests/`
  folder next to the unit under test.
- Critical user flows: Playwright e2e in `e2e/`.
- Tests assert user-visible behavior and accessibility, not implementation detail.
- A bug fix MUST include a test that fails without the fix.

Rationale: research code still gets reused; untested behavior silently rots.

### V. Accessible, Responsive UI

The UI MUST be usable by keyboard and assistive tech, and MUST work from mobile to
desktop.

- Prefer semantic HTML; use Radix/shadcn primitives rather than re-implementing
  interactive widgets.
- Interactive elements MUST be keyboard operable and have visible focus.
- Colour contrast MUST meet WCAG AA.
- Layouts use responsive Tailwind utilities; no fixed-width layouts that break
  below common breakpoints.

Rationale: accessibility and responsiveness are far cheaper to keep than to
retrofit.

## Technology Constraints

The stack is authoritative — do not substitute:

- Next.js 16 App Router, TypeScript strict, React Compiler, static export.
- Tailwind CSS v4; UI via shadcn/ui + Radix primitives copied into
  `src/components/ui/`.
- Client state: Zustand (`src/store/`). Forms: React Hook Form + Zod. Toasts:
  `sonner`. Error boundaries: `react-error-boundary` + Next `error.tsx`. Icons:
  `lucide-react`.
- Testing: Vitest + React Testing Library + Playwright.

Banned — never introduce, never suggest, flag on sight: axios; Redux / RTK /
RTK Query; Jotai; Material UI, Ant Design, Chakra, Bootstrap; styled-components;
Jest; Storybook; npm or yarn; any server-only / backend-assuming code.

Adding a runtime dependency requires a one-line justification in the PR description
and MUST NOT duplicate a capability the stack already provides.

## Development Workflow

- Feature work follows the spec-kit flow: `/speckit-constitution` →
  `/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`.
  Optional aids: `/speckit-clarify`, `/speckit-analyze`, `/speckit-checklist`.
- Per-feature artifacts live in `specs/<NNN-slug>/`.
- The plan step MUST include a Constitution Check; unresolved violations block the
  plan until justified or removed.
- Every change is reviewed against this constitution before merge. Quality gates
  (`typecheck`, `lint`, `test`, `build`) are the merge bar.
- Keep changes small and focused; prefer deleting an unused primitive over
  patching around it.

### Branching (NON-NEGOTIABLE)

- **Nobody pushes to `main` directly.** `main` is release-only and updated
  exclusively by merging a pull request.
- `develop` is the integration branch. Day-to-day work lands on `develop` (via
  short-lived `feature/*` or `fix/*` branches merged into `develop`, or small
  commits straight onto `develop`).
- Shipping to `main` is a pull request **from `develop` into `main`**, reviewed
  against this constitution with all quality gates green.
- `main` and `develop` are branch-protected on the remote; the PR requirement is
  enforced by ruleset, not by convention.

## Governance

This constitution supersedes other conventions where they conflict.

- **Amendments**: proposed via a PR (from `develop` into `main`) that edits this
  file, states the rationale, and bumps the version. Merge requires the
  maintainer's approval.
- **Versioning** (semantic):
  - MAJOR — a principle is removed or redefined in a backward-incompatible way.
  - MINOR — a new principle or section is added, or guidance is materially
    expanded.
  - PATCH — clarifications and wording fixes with no change in meaning.
- **Compliance**: every PR review verifies the change complies. Deviations MUST be
  documented in the PR and either fixed or captured as a follow-up task.
- **Runtime guidance**: `CLAUDE.md` is the day-to-day operational guide and MUST
  stay consistent with this constitution.

**Version**: 1.1.0 | **Ratified**: 2026-08-31 | **Last Amended**: 2026-08-31
