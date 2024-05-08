import { ComponentProps, PropsWithChildren } from "react"
import { Card } from "../../core"

type Props = ComponentProps<typeof Card>
export const Hero = ({ image }: PropsWithChildren<Props>) => {
  return <Card image={image} />
}
