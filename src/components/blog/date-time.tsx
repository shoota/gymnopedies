import * as React from "react"
import { format, parseISO } from "date-fns"

import { cn } from "@/lib/utils"

export type DateTimeProps = Omit<
  React.TimeHTMLAttributes<HTMLTimeElement>,
  "dateTime"
> & {
  dateString: string
  formatStr?: string
}

export function DateTime({
  dateString,
  formatStr = "MMMM dd, yyyy",
  className,
  ...props
}: DateTimeProps) {
  const date = parseISO(dateString)
  return (
    <time
      dateTime={dateString}
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {format(date, formatStr)}
    </time>
  )
}
