import { ImgHTMLAttributes, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { Size } from "../../constants"
import { keyframes } from "@emotion/react"

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
  coverTop?: number
  size?: Size
  imgProps: ImgHTMLAttributes<HTMLImageElement>
}
export const Hero = ({
  cover,
  coverTop,
  size = "md",
  imgProps,
}: PropsWithChildren<Props>) => {
  const { width, maxWidth, standardFontSize } = sizeProperties[size]
  return (
    <Container>
      <FlexContainer width={width} maxWidth={maxWidth}>
        <ImageWrap>
          <Image {...imgProps} />
        </ImageWrap>
        <Title standardFontSize={standardFontSize} coverTop={coverTop}>
          {cover}
        </Title>
      </FlexContainer>
    </Container>
  )
}

const lighting = keyframes`
  0% {
    filter: grayscale(0.8) brightness(1);
  }
  75% {
    filter: grayscale(0.9) brightness(0.5) blur(3px);
  }
  100% {
    filter: grayscale(1) brightness(0.4) blur(4px);
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const FlexContainer = styled.div<{ width: string; maxWidth: string }>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageWrap = styled.div`
  width: 100%;
`

const Image = styled.img`
  display: block;
  vertical-align: top;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
  filter: grayscale(1);
  animation: ${lighting} 8s 1.5s ease-in-out 2 alternate;
`

const Title = styled.h1<{ standardFontSize: string; coverTop?: number }>`
  display: inline-block;
  width: 100%;
  position: absolute;
  top: ${({ coverTop }) => (coverTop ? `${coverTop}%` : "50%")};
  left: 50%;
  text-align: center;
  text-wrap: nowrap;
  background-color: rgba(var(--color-dark-rgb), 0.45);
  overflow: hidden;
  font-size: ${({ standardFontSize }) =>
    `clamp(4px, ${standardFontSize}, 4.5rem)`};
  transform: translate(-50%, -50%);
`
