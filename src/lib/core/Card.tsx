import styled from "@emotion/styled"
import { ImgHTMLAttributes, ReactNode } from "react"
import { colors, colorsRGB } from "../theme/color"

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

type Props = {
  title: string
  description?: ReactNode
  image?: ImageProps
  imageCaption?: ReactNode
  onClick?: () => void
}
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
        <Picture>
          <Image {...image} />
          <PictureCaption>{imageCaption}</PictureCaption>
        </Picture>
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

const Picture = styled.figure`
  position: relative;
  background-color: ${colors.main};
  border-radius: 4px;
  > img {
    border-radius: 4px;
  }
`
const PictureCaption = styled.figcaption`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 0 6px;
  height: 24px;
  line-height: 24px;
  width: auto;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.tone};
  text-shadow: none;
  background-color: rgb(${colorsRGB.dark}, 0.6);
`

const Image = styled.img<{ src?: string }>`
  box-sizing: content-box;
  display: block;
  vertical-align: top;
  outline: none;
  margin: 0;
  border: none;
  padding: 0;
  padding-bottom: calc(100% * 2 / 4);
  width: 100%;
  height: 0;
  object-fit: cover;
  object-position: center;
  background-size: cover;
  background-position: center;
  background-color: ${colors.dark};
  opacity: 0.6;
  filter: grayscale(1);
  transition: opacity 0.6s;
  ${({ src }) => !!src && `background-image: url(${src})`};

  :hover {
    opacity: 1;
    filter: grayscale(0.6);
    transition:
      opacity 1.2s,
      filter 1s 0.4s;
  }
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
