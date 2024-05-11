import styled from "@emotion/styled"
import { ComponentProps, ReactNode } from "react"
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
}: Props) => {
  return (
    <BasicCard onClick={onClick} isClickable={!!onClick}>
      <Container>
        <Picture image={image} imageCaption={imageCaption} />
        <ContentContainer>
          <Content>
            <Title>{title}</Title>
            <div>{description}</div>
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
  padding: 20px;
  min-height: 0;
`

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;
  padding: 20px;
  min-height: 0;
`
const Title = styled.h1``
