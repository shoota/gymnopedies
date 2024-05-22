import { ImgHTMLAttributes, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { colorsRGB } from "../../theme/color"

type Props = { cover: string } & ImgHTMLAttributes<HTMLImageElement>
export const Hero = ({ cover, src }: PropsWithChildren<Props>) => {
  return (
    <FlexContainer>
      <Container>
        <Image src={src} />
      </Container>
      <Title>{cover}</Title>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
`
const Image = styled.img`
  display: block;
  vertical-align: top;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
  filter: grayscale(1);
`

const Title = styled.h1`
  display: inline-block;
  width: 100%;
  position: absolute;
  top: 66%;
  left: 50%;
  text-align: center;
  text-wrap: nowrap;
  background-color: rgba(${colorsRGB.dark}, 0.45);
  overflow: hidden;
  font-size: clamp(4px, 6vw, 4.5rem);
  transform: translate(-50%, -50%);
`
