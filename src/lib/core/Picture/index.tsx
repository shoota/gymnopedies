import styled from "@emotion/styled"
import { ImgHTMLAttributes, ReactNode } from "react"
import { colors, colorsRGB } from "../../theme/color"
import { css } from "@emotion/react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

type Props = {
  image?: ImageProps
  imageCaption?: ReactNode
  transition?: boolean
}

export const Picture = ({ image, imageCaption, transition }: Props) => {
  return (
    <PictureContainer>
      <Image {...image} transition={transition} />
      <PictureCaption>{imageCaption}</PictureCaption>
    </PictureContainer>
  )
}

const PictureContainer = styled.figure`
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

const imageTransition = css`
  :hover,
  :focus {
    opacity: 1;
    filter: grayscale(0.6);
    transition:
      opacity 1.2s,
      filter 1s 0.4s;
  }
`
const Image = styled.img<{ src?: string; transition?: boolean }>`
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

  ${({ transition }) => transition && imageTransition};
`
