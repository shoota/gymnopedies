import * as React from "react"

import { cn } from "@/lib/utils"

export type HeaderNavigationMenuItem = {
  name: string
  onClick?: () => void
}

export type HeaderNavigationProps = React.HTMLAttributes<HTMLElement> & {
  title: string
  menuItems?: HeaderNavigationMenuItem[]
  currentIndex?: number
}

export function HeaderNavigation({
  title,
  menuItems = [],
  currentIndex,
  className,
  ...props
}: HeaderNavigationProps) {
  return (
    <header
      className={cn(
        "mx-0 my-5 flex items-center justify-between gap-4 px-6 py-4",
        "bg-[rgba(4,37,43,0.4)] bg-[linear-gradient(rgba(214,214,214,0.1)_0%,rgba(4,37,43,0.4)_4%,rgba(4,37,43,0.4)_80%,rgba(4,37,43,0.4)_90%,rgba(214,214,214,0.1)_100%)]",
        "shadow-[0_0_2.5rem_0_rgba(214,214,214,0.3)]",
        className
      )}
      {...props}
    >
      <h1 className="m-0 flex-grow text-base sm:text-xl md:text-2xl lg:text-3xl">
        {title}
      </h1>
      {menuItems.length > 0 && (
        <nav className="flex items-center gap-3 text-[0.625rem] sm:text-sm md:text-base">
          {menuItems.map((item, index) => {
            const isCurrent = index === currentIndex
            if (isCurrent || !item.onClick) {
              return (
                <span key={`${item.name}-${index}`} aria-current={isCurrent ? "page" : undefined}>
                  {item.name}
                </span>
              )
            }
            return (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={item.onClick}
                className="underline decoration-primary underline-offset-4 hover:text-primary"
              >
                {item.name}
              </button>
            )
          })}
        </nav>
      )}
    </header>
  )
}
