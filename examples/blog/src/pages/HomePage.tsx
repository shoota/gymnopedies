import { Hero } from "@/components/blog/hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DateTime } from "@/components/blog/date-time"
import { Badge } from "@/components/ui/badge"

import { sortedPosts } from "@blog/data/posts"
import { postHref, postsHref } from "@blog/links"
import { PostCard } from "@blog/components/PostCard"

export function HomePage() {
  const all = sortedPosts()
  const [featured, ...rest] = all
  const recent = rest.slice(0, 3)
  const older = rest.slice(3)

  return (
    <>
      <div className="mx-auto mt-4 w-full max-w-5xl px-4 sm:px-6">
        <Hero
          cover="Quiet Pages"
          size="md"
          imgProps={{
            src: featured.cover.src,
            alt: featured.cover.alt,
            loading: "eager",
          }}
        />
      </div>

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <section className="mt-16 mb-20 text-center">
          <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
            Letters, notebooks, and field notes
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A sample blog about unhurried rooms, late lamps, and books that
            refuse to be finished. Every page is built from the{" "}
            <a
              href="https://gymnopedies.shoota.work/"
              className="underline decoration-primary underline-offset-4"
            >
              gymnopédies
            </a>{" "}
            shadcn registry.
          </p>
        </section>

        <section className="mb-20">
          <SectionLabel kicker="From the editor" title="Lead article" />
          <a
            href={postHref(featured.slug)}
            className="group block no-underline focus:outline-none"
            aria-label={`Read ${featured.title}`}
          >
            <Card className="overflow-hidden transition-shadow group-hover:shadow-strong-glow group-focus:shadow-strong-glow">
              <img
                src={featured.cover.src}
                alt={featured.cover.alt}
                loading="eager"
                className="aspect-[21/9] w-full object-cover opacity-80 grayscale transition duration-700 group-hover:opacity-100 group-hover:grayscale-[30%] group-focus:opacity-100 group-focus:grayscale-[30%]"
              />
              <CardHeader className="gap-3 px-6 pt-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <DateTime dateString={featured.date} formatStr="MMMM d, yyyy" />
                  <span aria-hidden="true">·</span>
                  <span>{featured.author}</span>
                </div>
                <CardTitle className="text-2xl leading-tight text-foreground group-hover:text-primary group-focus:text-primary sm:text-3xl">
                  {featured.title}
                </CardTitle>
                <p className="m-0 text-base leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="m-0 text-sm italic leading-relaxed text-accent">
                  “{featured.excerpt}”
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {featured.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="font-normal text-[0.6875rem]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        </section>

        <section className="mb-20">
          <SectionLabel kicker="Recent" title="Lately written" />
          <ul className="m-0 grid list-none gap-8 p-0">
            {recent.map((post) => (
              <li key={post.slug} className="m-0 p-0">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </section>

        {older.length > 0 && (
          <section className="mb-20">
            <SectionLabel kicker="Archive" title="From the shelves" />
            <ul className="m-0 list-none divide-y divide-border p-0">
              {older.map((post) => (
                <li key={post.slug} className="py-5">
                  <a
                    href={postHref(post.slug)}
                    className="group flex flex-col gap-2 no-underline focus:outline-none sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="text-base text-foreground group-hover:text-primary group-focus:text-primary">
                        {post.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.description}
                      </span>
                    </span>
                    <DateTime
                      dateString={post.date}
                      formatStr="yyyy.MM.dd"
                      className="font-mono text-xs"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-12 text-center">
          <a
            href={postsHref()}
            className="inline-block rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            See all articles →
          </a>
        </section>
      </main>
    </>
  )
}

function SectionLabel({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-8">
      <p className="m-0 text-xs uppercase tracking-[0.3em] text-primary">
        {kicker}
      </p>
      <h2 className="m-0 mt-2 text-2xl sm:text-3xl">{title}</h2>
    </header>
  )
}
