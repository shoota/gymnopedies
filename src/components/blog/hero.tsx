import * as React from "react"

import { cn } from "@/lib/utils"

export type HeroSize = "sm" | "md" | "lg"

type HeroSizeConfig = {
  container: string
  title: string
}

const sizeConfig: Record<HeroSize, HeroSizeConfig> = {
  sm: {
    container: "w-[60vw] max-w-[800px]",
    title: "text-[clamp(4px,4vw,4.5rem)]",
  },
  md: {
    container: "w-[75vw] max-w-[1000px]",
    title: "text-[clamp(4px,5vw,4.5rem)]",
  },
  lg: {
    container: "w-[90vw] max-w-[1200px]",
    title: "text-[clamp(4px,6vw,4.5rem)]",
  },
}

export type HeroProps = {
  cover: string
  coverTop?: number
  size?: HeroSize
  imgProps: React.ImgHTMLAttributes<HTMLImageElement>
  className?: string
}

export function Hero({
  cover,
  coverTop = 50,
  size = "md",
  imgProps,
  className,
}: HeroProps) {
  const { container, title } = sizeConfig[size]
  const { className: imgClassName, ...restImgProps } = imgProps

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center",
          container
        )}
      >
        <div className="w-full">
          <img
            {...restImgProps}
            className={cn(
              "block w-full object-cover object-center opacity-60 grayscale animate-lighting",
              imgClassName
            )}
          />
        </div>
        <h1
          className={cn(
            "absolute left-1/2 inline-block w-full -translate-x-1/2 -translate-y-1/2 text-center bg-[rgba(4,37,43,0.45)]",
            title
          )}
          style={{ top: `${coverTop}%` }}
        >
          {cover}
        </h1>
      </div>
    </div>
  )
}
