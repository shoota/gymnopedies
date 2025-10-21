import styled from "@emotion/styled"
import { CSSProperties, ImgHTMLAttributes, ReactNode } from "react"
import { css } from "@emotion/react"

type EnhancedImageProps = {
  objectPosition?: CSSProperties["objectPosition"]
  transition?: boolean
}

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & EnhancedImageProps

type Props = {
  image?: ImageProps
  imageCaption?: ReactNode
}

export const Picture = ({ image, imageCaption }: Props) => {
  return (
    <PictureContainer>
      <Image {...image} />
      <PictureCaption>{imageCaption}</PictureCaption>
    </PictureContainer>
  )
}

const PictureContainer = styled.figure`
  position: relative;
  background-color: var(--color-main);
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
  color: var(--color-tone);
  text-shadow: none;
  background-color: rgba(var(--color-dark-rgb), 0.6);
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
const Image = styled.img<ImageProps>`
  box-sizing: content-box;
  display: block;
  vertical-align: top;
  outline: none;
  margin: 0;
  border: none;
  padding: 0;
  width: 100%;
  height: ${({ height }) => `${height || "auto"}`};
  object-fit: cover;
  object-position: ${({ objectPosition }) => `${objectPosition || "center"}`};
  background-size: cover;
  background-position: center;
  background-color: var(--color-dark);
  opacity: 0.6;
  filter: grayscale(1);
  transition: opacity 0.6s;
  ${({ src }) => !!src && `background-image: url(${src})`};
  ${({ transition }) => transition && imageTransition};
`
