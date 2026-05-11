import * as React from "react"

import { cn } from "@/lib/utils"

type PictureProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

function PictureRoot({ className, children, ...props }: PictureProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-md bg-muted [&_img]:rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </figure>
  )
}

type PictureImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  objectPosition?: React.CSSProperties["objectPosition"]
  transition?: boolean
}

function PictureImage({
  className,
  objectPosition,
  transition = false,
  style,
  ...props
}: PictureImageProps) {
  return (
    <img
      {...props}
      style={{ objectPosition, ...style }}
      className={cn(
        "block w-full object-cover opacity-60 grayscale transition-opacity duration-700",
        transition &&
          "hover:opacity-100 hover:grayscale-[60%] hover:duration-1000 focus:opacity-100 focus:grayscale-[60%] focus:duration-1000",
        className
      )}
    />
  )
}

type PictureCaptionProps = React.HTMLAttributes<HTMLElement>

function PictureCaption({
  className,
  children,
  ...props
}: PictureCaptionProps) {
  return (
    <figcaption
      className={cn(
        "absolute bottom-0 right-0 h-6 px-1.5 text-xs font-bold leading-6 text-accent bg-[rgba(4,37,43,0.6)]",
        className
      )}
      {...props}
    >
      {children}
    </figcaption>
  )
}

export const Picture = Object.assign(PictureRoot, {
  Image: PictureImage,
  Caption: PictureCaption,
})

export { PictureImage, PictureCaption }
export type { PictureProps, PictureImageProps, PictureCaptionProps }
