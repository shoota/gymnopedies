import { ComponentProps, PropsWithChildren } from "react"
import { Card } from "../../core"

type CardProps = ComponentProps<typeof Card>

type Props = Pick<CardProps, "image" | "imageCaption" | "title">
export const Hero = ({
  title,
  image,
  imageCaption,
}: PropsWithChildren<Props>) => {
  return (
    <Card
      title={title}
      image={image}
      imageCaption={imageCaption}
      transition={false}
    />
  )
}
