import { useMemo, useState } from "react"

import { Separator } from "@/components/ui/separator"

import { sortedPosts } from "@blog/data/posts"
import { PostCard } from "@blog/components/PostCard"

export function PostsPage() {
  const all = sortedPosts()
  const allTags = useMemo(() => {
    const set = new Set<string>()
    for (const p of all) for (const t of p.tags) set.add(t)
    return ["all", ...Array.from(set).sort()]
  }, [all])

  const [tag, setTag] = useState<string>("all")
  const visible = tag === "all" ? all : all.filter((p) => p.tags.includes(tag))

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6">
      <header className="mb-10 text-center">
        <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
          Articles
        </p>
        <h2 className="m-0 mt-3 text-3xl sm:text-4xl">
          Everything written here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A small collection of essays and notebooks, in reverse chronological
          order. Filter by tag if you like — the lamp is on either way.
        </p>
      </header>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {allTags.map((t) => {
          const isActive = t === tag
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
                  : "rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              }
            >
              {t}
            </button>
          )
        })}
      </div>

      <Separator className="mb-10" />

      <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <li key={post.slug} className="m-0 flex p-0">
            <PostCard post={post} />
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          Nothing under "{tag}" yet.
        </p>
      )}
    </main>
  )
}
