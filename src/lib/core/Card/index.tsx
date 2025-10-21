import styled from "@emotion/styled"
import { ComponentProps, PropsWithChildren, ReactNode, useMemo } from "react"
import { Picture } from "../Picture"

type CustomStyleProps = {
  width?: string
  maxWidth?: string
  height?: string
}

type Props = {
  title?: string
  heading?: ReactNode
  description?: ReactNode
  onClick?: () => void
} & CustomStyleProps &
  ComponentProps<typeof Picture>

export const Card = ({
  title,
  heading,
  description,
  onClick,
  children,
  width,
  maxWidth,
  height,
  image,
  imageCaption,
}: PropsWithChildren<Props>) => {
  const hasContent = useMemo(
    () => title || description || children,
    [title, description, children]
  )

  return (
    <Container
      width={width}
      maxWidth={maxWidth}
      height={height}
      onClick={onClick}
      isClickable={!!onClick}
    >
      {heading && <Head>{heading}</Head>}
      {image && <Picture image={image} imageCaption={imageCaption} />}
      {hasContent && (
        <ContentContainer>
          {title && <h1>{title}</h1>}
          {description && <div>{description}</div>}
          {children && (
            <Content>
              <hr />
              {children}
            </Content>
          )}
        </ContentContainer>
      )}
    </Container>
  )
}

const Container = styled.article<
  CustomStyleProps & {
    isClickable?: boolean
  }
>`
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width !== undefined ? `${width}` : "100%")};
  height: ${({ height }) => (height !== undefined ? `${height}` : "100%")};
  ${({ maxWidth }) => maxWidth !== undefined && `max-width: ${maxWidth};`};
  background-color: var(--color-dark);
`

const Head = styled.span`
  margin: 6px 0 12px 0;
  text-decoration: underline;
`

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;
  padding: 16px;
`
const Content = styled.div`
  margin-top: 24px;
`
