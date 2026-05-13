import { Hero } from "@/components/blog/hero"
import { Article } from "@/components/blog/article"
import { DateTime } from "@/components/blog/date-time"
import { Badge } from "@/components/ui/badge"
import { sortedPosts } from "@blog/data/posts"
import { postHref, postsHref } from "@blog/links"

export function HomePage() {
  const all = sortedPosts()
  const [featured, ...rest] = all
  const recent = rest.slice(0, 3)
  const archive = rest.slice(3)

  return (
    <>
      <Hero
        cover="Quiet Pages"
        size="lg"
        imgProps={{
          src: featured.cover.src,
          alt: featured.cover.alt,
        }}
      />

      <section className="mx-auto mt-20 w-full max-w-3xl px-6 text-center">
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          A sample blog about unhurried rooms, late lamps, and books that
          refuse to be finished. Every page on this site is built from the{" "}
          <a
            href="https://gymnopedies.shoota.work/"
            className="underline decoration-primary underline-offset-4"
          >
            gymnopédies
          </a>{" "}
          shadcn registry.
        </p>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
              Lead
            </p>
            <h2 className="m-0 mt-2 text-2xl sm:text-3xl">From the editor</h2>
          </div>
          <DateTime dateString={featured.date} className="text-sm" />
        </header>

        <a
          href={postHref(featured.slug)}
          className="group block focus:outline-none"
          aria-label={`Read ${featured.title}`}
        >
          <Article
            size="xl"
            title={featured.title}
            description={featured.description}
            content={`${featured.author} · ${featured.tags.join(" / ")}`}
            image={{
              src: featured.cover.src,
              alt: featured.cover.alt,
              caption: featured.cover.caption,
            }}
            className="mx-auto max-w-3xl transition-shadow group-hover:shadow-strong-glow group-focus:shadow-strong-glow"
          />
        </a>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6">
        <header className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
              Recent
            </p>
            <h2 className="m-0 mt-2 text-2xl sm:text-3xl">Lately written</h2>
          </div>
          <a
            href={postsHref()}
            className="text-sm underline decoration-primary underline-offset-4"
          >
            All articles →
          </a>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
            <a
              key={post.slug}
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
                }}
                className="h-full transition-shadow group-hover:shadow-strong-glow group-focus:shadow-strong-glow"
              />
            </a>
          ))}
        </div>
      </section>

      {archive.length > 0 && (
        <section className="mx-auto mt-24 w-full max-w-3xl px-6">
          <header className="mb-8">
            <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
              Archive
            </p>
            <h2 className="m-0 mt-2 text-2xl sm:text-3xl">From the shelves</h2>
          </header>

          <ul className="m-0 list-none divide-y divide-border p-0">
            {archive.map((post) => (
              <li key={post.slug} className="py-5">
                <a
                  href={postHref(post.slug)}
                  className="flex flex-col gap-2 no-underline focus:outline-none sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-lg text-foreground">
                      {post.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.description}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 text-xs">
                    {post.tags[0] && (
                      <Badge variant="outline" className="font-normal">
                        {post.tags[0]}
                      </Badge>
                    )}
                    <DateTime
                      dateString={post.date}
                      formatStr="yyyy.MM.dd"
                      className="font-mono"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
