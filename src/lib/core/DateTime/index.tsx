import { parseISO, format } from "date-fns"

type Props = {
  dateString: string
  formatStr?: string
}

export const DateTime = ({ dateString, formatStr }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, formatStr || "MMMM dd, yyyy")}
    </time>
  )
}
