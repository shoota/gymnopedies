import { HeaderNavigation } from "@/components/blog/header-navigation"
import type { Route } from "@blog/router"
import { navigate } from "@blog/router"

type NavKey = "home" | "posts" | "about"

const navItems: { key: NavKey; name: string; route: Route | null }[] = [
  { key: "home", name: "Home", route: { name: "home" } },
  { key: "posts", name: "Articles", route: { name: "posts" } },
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
