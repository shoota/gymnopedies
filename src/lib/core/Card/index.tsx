import styled from "@emotion/styled"
import { ComponentProps, PropsWithChildren, ReactNode } from "react"
import { colors } from "../../theme/color"
import { Picture } from "../Picture"

type Props = {
  title: string
  description?: ReactNode
  onClick?: () => void
} & ComponentProps<typeof Picture>

export const Card = ({
  title,
  description,
  image,
  imageCaption,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <BasicCard onClick={onClick} isClickable={!!onClick}>
      <Container>
        <Picture image={image} imageCaption={imageCaption} />
        <ContentContainer>
          <h1>{title}</h1>
          <div>{description}</div>

          <Content>
            <hr />
            {children}
          </Content>
        </ContentContainer>
      </Container>
    </BasicCard>
  )
}

const BasicCard = styled.article<{ isClickable: boolean }>`
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
