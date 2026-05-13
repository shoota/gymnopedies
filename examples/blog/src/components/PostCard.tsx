import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DateTime } from "@/components/blog/date-time"
import { Badge } from "@/components/ui/badge"

import type { Post } from "@blog/data/posts"
import { postHref } from "@blog/links"

export function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={postHref(post.slug)}
      className="group flex h-full w-full flex-col no-underline focus:outline-none"
      aria-label={`Read ${post.title}`}
    >
      <Card className="h-full w-full overflow-hidden transition-shadow group-hover:shadow-soft-glow group-focus:shadow-soft-glow">
        <img
          src={post.cover.src}
          alt={post.cover.alt}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover opacity-70 grayscale transition duration-700 group-hover:opacity-100 group-hover:grayscale-[40%] group-focus:opacity-100 group-focus:grayscale-[40%]"
        />
        <CardHeader className="gap-2 pt-4">
          <DateTime
            dateString={post.date}
            formatStr="MMMM d, yyyy"
            className="text-xs uppercase tracking-[0.2em]"
          />
          <CardTitle className="text-xl leading-snug text-foreground group-hover:text-primary group-focus:text-primary">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="m-0 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="border-t-0 bg-transparent pt-2 pb-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
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
            <span className="text-xs text-muted-foreground group-hover:text-primary group-focus:text-primary">
              Read article →
            </span>
          </div>
        </CardFooter>
      </Card>
    </a>
  )
}
