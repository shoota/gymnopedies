import styled from "@emotion/styled"
import { ComponentProps, PropsWithChildren, ReactNode } from "react"
import { colors } from "../../theme/color"
import { Picture } from "../Picture"

type Props = {
  title?: string
  heading?: ReactNode
  cardWidth?: string
  description?: ReactNode
  width?: string
  onClick?: () => void
} & ComponentProps<typeof Picture>

export const Card = ({
  title,
  description,
  onClick,
  heading,
  image,
  imageCaption,
  transition,
  children,
  cardWidth,
  figureWidth,
}: PropsWithChildren<Props>) => {
  return (
    <BasicCard cardWidth={cardWidth} onClick={onClick} isClickable={!!onClick}>
      <Container>
        {heading && <Head>{heading}</Head>}
        <Picture
          figureWidth={figureWidth}
          image={image}
          imageCaption={imageCaption}
          transition={transition}
        />
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
      </Container>
    </BasicCard>
  )
}

const BasicCard = styled.article<{ isClickable: boolean; cardWidth?: string }>`
  ${({ cardWidth }) => cardWidth !== undefined && `width: ${cardWidth}`};
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  display: block;
`

const Container = styled.div`
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.dark};
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
