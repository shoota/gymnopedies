import { ComponentProps, PropsWithChildren } from "react"
import { Card } from "../../core"

type Props = ComponentProps<typeof Card>
export const Hero = ({
  title,
  description,
  image,
  imageCaption,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <Card
      title={title}
      description={description}
      image={image}
      imageCaption={imageCaption}
      onClick={onClick}
    />
  )
}
