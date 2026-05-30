import { HeaderNavigation } from "@/components/blog/header-navigation"
import type { Route } from "@blog/router"
import { navigate } from "@blog/router"

type NavKey = "home" | "posts" | "storybook" | "about"

const STORYBOOK_URL = "https://gymnopedies.shoota.work/"

type NavItem = {
  key: NavKey
  name: string
  route: Route | null
  external?: string
}

const navItems: NavItem[] = [
  { key: "home", name: "Home", route: { name: "home" } },
  { key: "posts", name: "Articles", route: { name: "posts" } },
  { key: "storybook", name: "Storybook", route: null, external: STORYBOOK_URL },
  { key: "about", name: "About", route: null },
]

export function SiteHeader({ active }: { active: NavKey }) {
  const currentIndex = navItems.findIndex((item) => item.key === active)
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <HeaderNavigation
        title="Quiet Pages"
        currentIndex={currentIndex}
        menuItems={navItems.map((item) => ({
          name: item.name,
          onClick: item.route
            ? () => navigate(item.route!)
            : item.external
              ? () =>
                  window.open(item.external, "_blank", "noopener,noreferrer")
              : () => {
                  window.alert(
                    "This is a gymnopédies sample blog — the 'About' page is left as an exercise to the reader.",
                  )
                },
        }))}
      />
    </div>
  )
}
