import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Picture } from "../Picture"

type CardProps = {
  title: string
  description: string
  content?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  image?: {
    src: string
    alt: string
    caption?: ReactNode
  }
}

export const Card = ({
  title,
  description,
  content,
  size = "sm",
  image,
}: CardProps) => {
  return (
    <CardContainer size={size}>
      {image && (
        <ImageContainer>
          <Picture
            image={{
              src: image.src,
              alt: image.alt,
              transition: true,
            }}
            imageCaption={image.caption}
          />
        </ImageContainer>
      )}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {content && <CardText>{content}</CardText>}
      </CardContent>
    </CardContainer>
  )
}

const CardContainer = styled.article<{ size: "xs" | "sm" | "md" | "lg" | "xl" }>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  border-radius: var(--border-radius-outer);
  box-shadow: var(--box-shadow-soft-glow);
  overflow: hidden;
  width: 100%;
  max-width: var(--box-size-${({ size }) => size});
`

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  figure {
    height: 100%;
    margin: 0;
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`

const CardContent = styled.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-tone);
  text-shadow: var(--text-shadow-glow);
`

const CardDescription = styled.p`
  margin: 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-light);
  text-shadow: var(--text-shadow-light-blur);
`

const CardText = styled.p`
  margin: 0;
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-tone);
  text-shadow: var(--text-shadow-glow);
`
