# Changelog

All notable changes to gymnopédies are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and the project adheres to
[Semantic Versioning](https://semver.org/).

## [1.1.2] — 2026-05-14

### Fixed

- **`registryDependencies` pointed at the wrong registry.** Internal
  cross-references were emitted as bare names (`"button"`, `"theme"`, …), which
  the shadcn CLI resolves against _its own_ default registry. `npx shadcn add`
  pulled official shadcn components instead of the gymnopédies-themed ones, and
  failed outright on items with no upstream equivalent (`hero`, `article`,
  `theme`, …). They are now full item URLs.
- **Hook files were missing from the registry.** `sidebar` imports
  `@/hooks/use-mobile`, but `src/hooks/` was never scanned by the registry
  build, so installing `sidebar` produced a project that failed to typecheck
  (`Cannot find module '@/hooks/use-mobile'`). `src/hooks/*` are now published
  as `registry:hook` items and wired into the importing components'
  `registryDependencies`.

## [1.1.1] — 2026-05-14

### Fixed

- **Component npm dependencies were not declared.** `registry.json` and
  `public/r/*.json` shipped every component with an empty `dependencies` field,
  so `npx shadcn add` installed the source without the packages it imports —
  33 of 45 items were affected, including `button`, `badge` and `separator`.
  `scripts/build-registry.ts` now derives the dependency list by scanning each
  component's `import` statements.

## [1.1.0] — 2026-05-13

### Added

- **Quiet Pages** sample blog under `examples/blog/`, deployed on the same
  domain at <https://gymnopedies.shoota.work/examples/blog/>. Three pages —
  Home / Articles / Article detail — built from `Hero`, `Picture`, `Content`,
  `DateTime`, `HeaderNavigation` and the shadcn `Card` primitive.
- Responsive 1 / 2 / 3-column grid on the Articles page; a tiny self-rolled
  hash router keeps runtime dependencies unchanged.
- `npm run dev:examples` (and a `:https` variant reusing the mkcert pair) for
  local development of the sample blog.

### Changed

- The Vercel build now runs `npm run build:examples` after Storybook, so the
  Storybook UI, the registry endpoints and the sample site cohabit one host.

## [1.0.0] — 2026-05-12

First stable release. The 0.1.x prototype (an Emotion-based npm package) is
retired in favour of a shadcn/ui registry that distributes source code directly
into consumer projects.

### Added

- 35 non-form shadcn primitives, each with a Storybook story.

### Changed

- Replaced Emotion with Tailwind CSS v4.
- Migrated to shadcn/ui registry distribution; dropped npm bundling.
- Adopted **Base UI** primitives via the `base-nova` shadcn style. All
  `*Trigger` / `*Close` etc. use the Base UI `render` prop instead of Radix's
  `asChild`; `ToggleGroup` and `Accordion` use array `defaultValue` / `value`
  and the `multiple` boolean.
- Reset the directory layout to shadcn conventions (`src/components/ui` +
  `src/components/blog`).
- Ported the legacy bespoke components to Tailwind compound APIs.

[1.1.2]: https://github.com/shoota/gymnopedies/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/shoota/gymnopedies/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/shoota/gymnopedies/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/shoota/gymnopedies/releases/tag/v1.0.0
