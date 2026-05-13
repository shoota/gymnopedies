import { useMemo, useState } from "react"

import { Article } from "@/components/blog/article"
import { DateTime } from "@/components/blog/date-time"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { sortedPosts } from "@blog/data/posts"
import { postHref } from "@blog/links"

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
    <main className="mx-auto w-full max-w-6xl px-6 pt-8">
      <header className="mb-12">
        <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
          Articles
        </p>
        <h2 className="m-0 mt-2 text-3xl sm:text-4xl">
          Everything written here, in reverse order of writing
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A small collection of essays and notebooks. Filter by tag if you
          like — or scroll. The lamp is on either way.
        </p>
      </header>

      <div className="mb-10 flex flex-wrap items-center gap-2">
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

      <Separator className="mb-12" />

      <ul className="m-0 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <li key={post.slug} className="m-0 p-0">
            <a
              href={postHref(post.slug)}
              className="group block focus:outline-none"
              aria-label={`Read ${post.title}`}
            >
              <Article
                size="md"
                title={post.title}
                description={post.description}
                image={{
                  src: post.cover.src,
                  alt: post.cover.alt,
                  caption: post.cover.caption,
                }}
                className="h-full transition-shadow group-hover:shadow-strong-glow group-focus:shadow-strong-glow"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <DateTime dateString={post.date} formatStr="MMMM d, yyyy" />
                <span className="flex flex-wrap items-center gap-1">
                  {post.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="font-normal text-[0.6875rem]"
                    >
                      {t}
                    </Badge>
                  ))}
                </span>
              </div>
            </a>
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
