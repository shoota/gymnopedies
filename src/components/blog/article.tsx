import * as React from "react"

import { cn } from "@/lib/utils"
import { Picture } from "@/components/blog/picture"

/**
 * <Article /> — the gymnopédies article card.
 *
 * This is the v1 `core/Card` component, brought back as a blog primitive
 * (the shadcn-flavoured `ui/Card` is intentionally separate). Props, defaults
 * and text styling match the legacy implementation:
 *
 *   - dark teal surface (`bg-card`) with a soft glow shadow
 *   - 16:9 image header rendered through gymnopédies' <Picture /> so the
 *     legacy grayscale → hover-reveal animation is preserved
 *   - serif heading in `--accent` with a gold glow shadow
 *   - body copy in `--foreground` with a light-blur text shadow
 *   - optional supplementary `content` paragraph in `--accent` (xs)
 */

export type ArticleSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ArticleProps = {
  title: string
  description: string
  content?: string
  size?: ArticleSize
  image?: {
    src: string
    alt: string
    caption?: React.ReactNode
  }
  className?: string
}

const sizeMaxWidth: Record<ArticleSize, string> = {
  xs: "max-w-[12rem]", // 192px
  sm: "max-w-[20rem]", // 320px
  md: "max-w-[28rem]", // 448px
  lg: "max-w-[36rem]", // 576px
  xl: "max-w-[48rem]", // 768px
}

export function Article({
  title,
  description,
  content,
  size = "sm",
  image,
  className,
}: ArticleProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-lg bg-card shadow-soft-glow",
        sizeMaxWidth[size],
        className,
      )}
    >
      {image && (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Picture className="h-full rounded-none bg-card">
            <Picture.Image
              src={image.src}
              alt={image.alt}
              transition
              className="h-full rounded-none"
            />
            {image.caption ? (
              <Picture.Caption>{image.caption}</Picture.Caption>
            ) : null}
          </Picture>
        </div>
      )}
      <div className="flex flex-col gap-3 p-6">
        <h3
          className={cn(
            "m-0 text-xl font-bold leading-tight text-accent",
            "[text-shadow:var(--text-shadow-glow)]",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "m-0 text-base leading-[1.5] text-foreground",
            "[text-shadow:var(--text-shadow-light-blur)]",
          )}
        >
          {description}
        </p>
        {content ? (
          <p
            className={cn(
              "m-0 text-xs leading-[1.5] text-accent",
              "[text-shadow:var(--text-shadow-glow)]",
            )}
          >
            {content}
          </p>
        ) : null}
      </div>
    </article>
  )
}
