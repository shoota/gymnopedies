# Gymnopédies

A **shadcn registry** of dark, serif, glow-leaning React components for long-form
reading experiences (blogs, essays, archives, photo journals).

> **v1.0.0 is the first stable release.** The 0.1.x prototype (Emotion-based
> npm package) has been retired in favour of a shadcn/ui registry that
> distributes source code directly into consumer projects. Forms are
> intentionally out of scope — gymnopédies is a read-only design system.

## Stack

- React 18 + TypeScript 5
- Vite 5 + Tailwind CSS v4
- **shadcn/ui (style: `base-nova`) — primitives from `@base-ui/react`**
- For non-Base-UI primitives shadcn still pulls in: `vaul` (Drawer), `cmdk` (Command), `recharts` (Chart), `sonner` (Toast), `embla-carousel-react` (Carousel).
- date-fns v4, lucide-react
- Storybook 9 + Chromatic

## Component catalogue

`src/components/ui/` — 35 shadcn primitives (everything non-form):

| group        | components                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------- |
| primitives   | button, badge, separator, skeleton, aspect-ratio, avatar, progress                             |
| containers   | card, alert, scroll-area                                                                       |
| navigation   | breadcrumb, pagination, tabs, navigation-menu, menubar                                         |
| overlays     | dialog, alert-dialog, sheet, drawer, popover, hover-card, tooltip, sonner                      |
| menus        | dropdown-menu, context-menu, command                                                           |
| disclosure   | accordion, collapsible                                                                         |
| state/toggle | toggle, toggle-group                                                                           |
| layout       | resizable, sidebar                                                                             |
| data         | table, chart, carousel                                                                         |

`src/components/blog/` — 5 bespoke gymnopédies primitives:

| name              | purpose                                                                                |
| ----------------- | -------------------------------------------------------------------------------------- |
| hero              | full-bleed cover image + over-image title; ships the legacy `lighting` animation       |
| picture           | `<figure>` with grayscale-on-rest / reveal-on-hover image; compound API w/ `Caption`   |
| content           | article paragraph container; auto-spaces adjacent siblings; styles embedded images     |
| date-time         | `<time>` with date-fns formatting (default `MMMM dd, yyyy`)                            |
| header-navigation | gradient + glow page header with optional menu row                                     |

Each component has a `*.stories.tsx` file alongside it. Browse them with `npm run storybook`.

## Theme

The dark gymnopédies identity lives in `src/styles/globals.css`:

| token              | hex / value           | usage                                |
| ------------------ | --------------------- | ------------------------------------ |
| `--background`     | `#333333`             | page background                      |
| `--card`           | `#04252b`             | raised surfaces                      |
| `--secondary`      | `#35434c`             | inner fill / muted blocks            |
| `--muted-foreground` | `#999999`           | body subtle text                     |
| `--foreground`     | `#d6d6d6`             | primary body text                    |
| `--accent`         | `#cfd8de`             | hairline borders, tone highlights    |
| `--primary`        | `#d5ca86`             | brand accent / links / focus ring    |
| `--shadow-soft-glow` | tone glow ×2        | cards, figures                       |
| `--shadow-strong-glow` | gold glow ×2      | hover / interactive callout          |
| `--font-serif`     | Merriweather + fallbacks | every body & heading             |

## Local development

```bash
npm install

# Storybook (HTTP, no mkcert required)
npm run storybook:plain

# Storybook with HTTPS (requires mkcert localhost-key.pem / localhost.pem)
npm run storybook

# Static playground
npm run dev

# Verify the build
npm run typecheck
npm run lint
npm run build-storybook
```

## Distribution: shadcn registry

The registry is built from the file system by `scripts/build-registry.ts`:

```bash
npm run registry:generate   # regenerate registry.json from src/components
npm run registry:build      # regenerate + shadcn build → public/r/*.json
```

Hosting rides along with the Storybook deployment on Vercel: `public/r/` is
copied into Storybook's `storybook-static/` output dir via
`.storybook/main.ts`'s `staticDirs`, so the same domain serves both the
Storybook UI and the registry endpoints.

- Storybook UI:          <https://gymnopedies.shoota.work/>
- Registry preset:       <https://gymnopedies.shoota.work/r/gymnopedies.json>
- Individual items:      <https://gymnopedies.shoota.work/r/article.json> etc.

Consumers install with:

```bash
# Install the whole gymnopedies preset (theme + all components)
npx shadcn@latest add https://gymnopedies.shoota.work/r/gymnopedies.json

# Or pick individual items
npx shadcn@latest add https://gymnopedies.shoota.work/r/theme.json
npx shadcn@latest add https://gymnopedies.shoota.work/r/hero.json
npx shadcn@latest add https://gymnopedies.shoota.work/r/card.json
```

Consumers need Tailwind CSS v4 and the `@/*` path alias configured in their project.

## Migration from the 0.1.x prototype (Emotion)

There is no compatibility shim. If you are still on `gymnopedies@0.1.x` (Emotion
+ npm package), the path to v1.0.0 is:

1. Remove `gymnopedies` from `dependencies`.
2. Install Tailwind v4 in your project: `npx shadcn@latest init`.
3. Adopt the v1 components via `npx shadcn@latest add <url>`.
4. Rewrite call sites — APIs are not source-compatible:
   - The legacy `Card` returns as `blog/Article` with the same Props.
   - `Picture` moved to a compound API (`Picture.Image` / `Picture.Caption`).
   - The shadcn-style `ui/Card` is a separate compound primitive
     (`Card / CardHeader / CardTitle / CardContent / CardFooter`).
   - `GlobalStyles` keeps the same drop-in usability but is now a zero-
     dependency `<style>` injector instead of Emotion's `<Global>`.

## Release notes

- **v1.1.2** — registry cross-reference fix
  - Internal `registryDependencies` are now emitted as full item URLs
    (`https://gymnopedies.shoota.work/r/<name>.json`). Previously they were
    bare names, which the shadcn CLI resolves against *its own* default
    registry — so `npx shadcn add` pulled official shadcn components instead
    of the gymnopédies-themed ones, and failed on items with no upstream
    equivalent (`hero`, `article`, `theme`, …).
- **v1.1.1** — registry dependency fix
  - `registry.json` / `public/r/*.json` now list each component's npm
    dependencies (`@base-ui/react`, `class-variance-authority`,
    `lucide-react`, `embla-carousel-react`, …). Previously these fields were
    empty, so `npx shadcn add` installed the component source without the
    packages it imports — 33 of 45 items were affected, including `button`,
    `badge` and `separator`.
  - `scripts/build-registry.ts` now derives the dependency list by scanning
    each component's `import` statements, so the registry stays correct as
    components change.
- **v1.1.0** — sample blog published alongside the Storybook
  - New **Quiet Pages** sample site under `examples/blog/`, deployed on the
    same domain at <https://gymnopedies.shoota.work/examples/blog/>.
  - Three pages — Home / Articles / Article detail — built from `Hero`,
    `Picture`, `Content`, `DateTime`, `HeaderNavigation` and the shadcn `Card`
    primitive, so the `#04252b` surface and the dark-serif theme show up end
    to end.
  - Responsive 1 / 2 / 3-column grid on the Articles page; tiny self-rolled
    hash router keeps runtime dependencies unchanged.
  - Vercel build now runs `npm run build:examples` after Storybook so the
    sample blog ships in the same bundle. Storybook UI, registry endpoints
    and the sample site cohabit one host.
  - `npm run dev:examples` (+ `:https` variant reusing the mkcert pair) for
    local development.
  - Internal: a `blog.css` `@source` directive teaches Tailwind v4 to scan
    `src/` from the `examples/blog/` Vite root, so registry components
    render correctly outside the gymnopédies project tree — a useful
    reference for consumers wiring gymnopédies into a child Vite app.
- **v1.0.0** — first stable release
  - Replaced Emotion with Tailwind CSS v4.
  - Migrated to shadcn/ui registry distribution; dropped npm bundling.
  - Adopted **Base UI** primitives via the `base-nova` shadcn style.
    - All `*Trigger` / `*Close` etc. use the Base UI `render` prop instead of
      Radix's `asChild`.
    - `ToggleGroup` and `Accordion` use array `defaultValue`/`value` and the
      `multiple` boolean (Base UI API).
  - Reset directory layout to shadcn conventions (`src/components/ui` +
    `src/components/blog`).
  - Ported the legacy bespoke components to Tailwind compound APIs.
  - Added 35 non-form shadcn primitives + Storybook stories for each.
