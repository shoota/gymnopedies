import { ImgHTMLAttributes, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { colorsRGB } from "../../theme/color"
import { Size } from "../../constants"

const sizeProperties: Record<
  Size,
  { width: string; maxWidth: string; standardFontSize: string }
> = {
  sm: {
    width: "60vw",
    maxWidth: "800px",
    standardFontSize: "4vw",
  },
  md: {
    width: "75vw",
    maxWidth: "1000px",
    standardFontSize: "5vw",
  },
  lg: {
    width: "90vw",
    maxWidth: "1200px",
    standardFontSize: "6vw",
  },
}

type Props = {
  cover: string
  size?: Size
} & ImgHTMLAttributes<HTMLImageElement>
export const Hero = ({
  cover,
  size = "md",
  ...imgProps
}: PropsWithChildren<Props>) => {
  const { width, maxWidth, standardFontSize } = sizeProperties[size]
  return (
    <FlexContainer width={width} maxWidth={maxWidth}>
      <Container>
        <Image {...imgProps} />
      </Container>
      <Title standardFontSize={standardFontSize}>{cover}</Title>
    </FlexContainer>
  )
}

const FlexContainer = styled.div<{ width: string; maxWidth: string }>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
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

const Title = styled.h1<{ standardFontSize: string }>`
  display: inline-block;
  width: 100%;
  position: absolute;
  top: 66%;
  left: 50%;
  text-align: center;
  text-wrap: nowrap;
  background-color: rgba(${colorsRGB.dark}, 0.45);
  overflow: hidden;
  font-size: ${({ standardFontSize }) =>
    `clamp(4px, ${standardFontSize}, 4.5rem)`};
  transform: translate(-50%, -50%);
`
