import { useEffect, useState } from "react"

export type Route =
  | { name: "home" }
  | { name: "posts" }
  | { name: "post-detail"; slug: string }
  | { name: "not-found" }

function parseHash(rawHash: string): Route {
  const path = rawHash.replace(/^#/, "") || "/"
  if (path === "/" || path === "") return { name: "home" }
  if (path === "/posts" || path === "/posts/") return { name: "posts" }
  const m = path.match(/^\/posts\/([^/]+)$/)
  if (m) return { name: "post-detail", slug: decodeURIComponent(m[1]) }
  return { name: "not-found" }
}

function readHash(): string {
  if (typeof window === "undefined") return ""
  return window.location.hash
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(readHash()))

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return route
}

export function hrefFor(route: Route): string {
  switch (route.name) {
    case "home":
      return "#/"
    case "posts":
      return "#/posts"
    case "post-detail":
      return `#/posts/${encodeURIComponent(route.slug)}`
    case "not-found":
      return "#/"
  }
}

export function navigate(route: Route): void {
  window.location.hash = hrefFor(route).replace(/^#/, "")
}
