import styled from "@emotion/styled"
import { ImgHTMLAttributes } from "react"
import { colors } from "../theme/color"

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

type Props = { image?: ImageProps }
export const Card = ({ image }: Props) => {
  return (
    <BasicCard>
      <CardContainer>
        <Picture>
          <Image {...image} />
        </Picture>
      </CardContainer>
    </BasicCard>
  )
}

const BasicCard = styled.article`
  display: block;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Picture = styled.div`
  background-color: ${colors.main};
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
