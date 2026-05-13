import { Hero } from "@/components/blog/hero"
import { Content } from "@/components/blog/content"
import { Picture } from "@/components/blog/picture"
import { DateTime } from "@/components/blog/date-time"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { findPost, sortedPosts } from "@blog/data/posts"
import { postHref, postsHref } from "@blog/links"

export function PostDetailPage({ slug }: { slug: string }) {
  const post = findPost(slug)
  if (!post) return <NotFound slug={slug} />

  const ordered = sortedPosts()
  const idx = ordered.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? ordered[idx - 1] : null
  const next = idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : null

  return (
    <>
      <Hero
        cover={post.title}
        size="md"
        imgProps={{ src: post.cover.src, alt: post.cover.alt }}
      />

      <article className="mx-auto w-full max-w-2xl px-6 pt-12">
        <header className="mb-8 flex flex-col items-center gap-3 text-center">
          <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
            {post.tags[0] ?? "essay"}
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <DateTime dateString={post.date} />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="font-normal text-[0.6875rem]"
              >
                {t}
              </Badge>
            ))}
          </div>
        </header>

        <p className="m-0 mb-8 text-center text-lg italic text-accent">
          {post.excerpt}
        </p>

        <Separator className="mb-2" />

        <div className="leading-[1.85] text-foreground">
          {post.body.map((paragraph, i) => (
            <Content key={i} className="px-0">
              <p className="m-0 text-base sm:text-[1.0625rem]">{paragraph}</p>
            </Content>
          ))}

          <Picture className="my-10">
            <Picture.Image
              src={post.cover.src}
              alt={post.cover.alt}
              transition
            />
            {post.cover.caption && (
              <Picture.Caption>{post.cover.caption}</Picture.Caption>
            )}
          </Picture>

          <Content className="px-0">
            <p className="m-0 text-sm text-muted-foreground">
              — {post.author}
            </p>
          </Content>
        </div>

        <Separator className="mb-10 mt-10" />

        <nav className="grid gap-6 sm:grid-cols-2">
          {prev ? (
            <a
              href={postHref(prev.slug)}
              className="group block rounded-md border border-border p-4 no-underline focus:outline-none"
            >
              <p className="m-0 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ← Newer
              </p>
              <p className="m-0 mt-2 text-base text-foreground group-hover:text-primary">
                {prev.title}
              </p>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={postHref(next.slug)}
              className="group block rounded-md border border-border p-4 text-right no-underline focus:outline-none"
            >
              <p className="m-0 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Older →
              </p>
              <p className="m-0 mt-2 text-base text-foreground group-hover:text-primary">
                {next.title}
              </p>
            </a>
          ) : (
            <span />
          )}
        </nav>

        <p className="mt-12 text-center">
          <a
            href={postsHref()}
            className="text-sm underline decoration-primary underline-offset-4"
          >
            ← Back to all articles
          </a>
        </p>
      </article>
    </>
  )
}

function NotFound({ slug }: { slug: string }) {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-6 pt-32 text-center">
      <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
        404
      </p>
      <h2 className="m-0 text-3xl">No article called “{slug}”</h2>
      <p className="m-0 text-muted-foreground">
        It may have been an idea I never wrote down. Try the index instead.
      </p>
      <p className="mt-4">
        <a
          href={postsHref()}
          className="underline decoration-primary underline-offset-4"
        >
          ← Back to all articles
        </a>
      </p>
    </main>
  )
}
