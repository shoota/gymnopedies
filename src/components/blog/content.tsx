import * as React from "react"

import { cn } from "@/lib/utils"

export type ContentProps = React.HTMLAttributes<HTMLDivElement>

export function Content({ className, children, ...props }: ContentProps) {
  return (
    <div
      className={cn(
        "p-4 [&_+_&]:mt-4 [&_img]:mx-auto [&_img]:my-4 [&_img]:rounded-sm [&_img]:shadow-[0_0_1rem_#04252b]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
