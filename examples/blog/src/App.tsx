import { useHashRoute } from "@blog/router"
import { SiteHeader } from "@blog/components/SiteHeader"
import { SiteFooter } from "@blog/components/SiteFooter"
import { HomePage } from "@blog/pages/HomePage"
import { PostsPage } from "@blog/pages/PostsPage"
import { PostDetailPage } from "@blog/pages/PostDetailPage"

export function App() {
  const route = useHashRoute()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        active={
          route.name === "home"
            ? "home"
            : route.name === "posts" || route.name === "post-detail"
              ? "posts"
              : "home"
        }
      />
      {route.name === "home" && <HomePage />}
      {route.name === "posts" && <PostsPage />}
      {route.name === "post-detail" && <PostDetailPage slug={route.slug} />}
      {route.name === "not-found" && <NotFound />}
      <SiteFooter />
    </div>
  )
}

function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6 pt-32 text-center">
      <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
        404
      </p>
      <h2 className="m-0 text-3xl">This page is empty.</h2>
      <p className="m-0 text-muted-foreground">
        It does happen, on quiet sites like this one.
      </p>
      <p className="mt-4">
        <a
          href="#/"
          className="underline decoration-primary underline-offset-4"
        >
          ← Return home
        </a>
      </p>
    </main>
  )
}
