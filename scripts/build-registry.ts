#!/usr/bin/env tsx
/**
 * Generate registry.json from the file system.
 *
 * - Scans src/components/ui/*.tsx (excluding *.stories.tsx) as registry:ui items.
 * - Scans src/components/blog/*.tsx (excluding *.stories.tsx) as registry:component items.
 * - Adds the cn util, the dark-theme stylesheet, and the meta `gymnopedies` preset.
 *
 * Run with `npm run registry:build` to also produce public/r/*.json via the shadcn CLI.
 */

import { readdirSync, writeFileSync } from "node:fs"
import { join, basename } from "node:path"

type RegistryItemType =
  | "registry:lib"
  | "registry:style"
  | "registry:ui"
  | "registry:component"
  | "registry:hook"

type RegistryFile = {
  path: string
  type: RegistryItemType
  target?: string
}

type RegistryItem = {
  name: string
  type: RegistryItemType
  title: string
  description: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files?: RegistryFile[]
  cssVars?: Record<string, Record<string, string>>
  css?: Record<string, unknown>
}

const ROOT = process.cwd()
const UI_DIR = join(ROOT, "src", "components", "ui")
const BLOG_DIR = join(ROOT, "src", "components", "blog")

const toTitle = (name: string) =>
  name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ")

const componentFiles = (dir: string) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
    .map((f) => basename(f, ".tsx"))
    .sort()

const utilItem: RegistryItem = {
  name: "utils",
  type: "registry:lib",
  title: "cn utility",
  description: "Class-name merging helper (clsx + tailwind-merge).",
  dependencies: ["clsx", "tailwind-merge"],
  files: [{ path: "src/lib/utils.ts", type: "registry:lib" }],
}

const themeItem: RegistryItem = {
  name: "theme",
  type: "registry:style",
  title: "Gymnopédies Theme",
  description:
    "Dark, serif, glow-leaning theme tokens — the gymnopédies identity layer.",
  files: [{ path: "src/styles/globals.css", type: "registry:style" }],
  cssVars: {
    theme: {
      "font-sans": "var(--font-serif)",
      "font-mono": "var(--font-mono)",
    },
    light: {
      background: "#333333",
      foreground: "#d6d6d6",
      card: "#04252b",
      "card-foreground": "#d6d6d6",
      popover: "#04252b",
      "popover-foreground": "#d6d6d6",
      primary: "#d5ca86",
      "primary-foreground": "#04252b",
      secondary: "#35434c",
      "secondary-foreground": "#d6d6d6",
      muted: "#35434c",
      "muted-foreground": "#999999",
      accent: "#cfd8de",
      "accent-foreground": "#04252b",
      destructive: "#d4856a",
      "destructive-foreground": "#04252b",
      border: "rgba(207, 216, 222, 0.18)",
      input: "rgba(207, 216, 222, 0.18)",
      ring: "#d5ca86",
      radius: "0.5rem",
    },
    dark: {
      background: "#333333",
      foreground: "#d6d6d6",
      card: "#04252b",
      "card-foreground": "#d6d6d6",
      popover: "#04252b",
      "popover-foreground": "#d6d6d6",
      primary: "#d5ca86",
      "primary-foreground": "#04252b",
      secondary: "#35434c",
      "secondary-foreground": "#d6d6d6",
      muted: "#35434c",
      "muted-foreground": "#999999",
      accent: "#cfd8de",
      "accent-foreground": "#04252b",
      destructive: "#d4856a",
      "destructive-foreground": "#04252b",
      border: "rgba(207, 216, 222, 0.18)",
      input: "rgba(207, 216, 222, 0.18)",
      ring: "#d5ca86",
    },
  },
}

const uiItems: RegistryItem[] = componentFiles(UI_DIR).map((name) => ({
  name,
  type: "registry:ui",
  title: toTitle(name),
  description: `${toTitle(name)} — gymnopédies-themed shadcn primitive.`,
  files: [{ path: `src/components/ui/${name}.tsx`, type: "registry:ui" }],
  registryDependencies: ["utils"],
}))

const blogItems: RegistryItem[] = componentFiles(BLOG_DIR).map((name) => ({
  name,
  type: "registry:component",
  title: toTitle(name),
  description: `${toTitle(name)} — gymnopédies blog reading primitive.`,
  files: [
    { path: `src/components/blog/${name}.tsx`, type: "registry:component" },
  ],
  registryDependencies: ["utils", "theme"],
  ...(name === "date-time" ? { dependencies: ["date-fns"] } : {}),
}))

const presetItem: RegistryItem = {
  name: "gymnopedies",
  type: "registry:style",
  title: "Gymnopédies — read-only design system",
  description:
    "A dark, serif, glow-leaning shadcn registry preset for long-form reading experiences. Installs the theme tokens, every non-form shadcn primitive, and the bespoke blog components.",
  registryDependencies: [
    "utils",
    "theme",
    ...uiItems.map((i) => i.name),
    ...blogItems.map((i) => i.name),
  ],
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "gymnopedies",
  homepage: "https://github.com/shoota/gymnopedies",
  items: [utilItem, themeItem, ...uiItems, ...blogItems, presetItem],
}

writeFileSync(
  join(ROOT, "registry.json"),
  JSON.stringify(registry, null, 2) + "\n",
)

const counts = {
  ui: uiItems.length,
  blog: blogItems.length,
  total: registry.items.length,
}

console.log(
  `Wrote registry.json with ${counts.total} items (${counts.ui} ui + ${counts.blog} blog + utils + theme + preset).`,
)
