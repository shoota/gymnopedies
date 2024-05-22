import styled from "@emotion/styled"
import { PropsWithChildren } from "react"
import { colors } from "../../theme/color"

export const Content = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  padding: 16px;
  & + & {
    margin-top: 16px;
  }
  img {
    margin: 1rem auto 0.85rem;
    border-radius: 2px;
    box-shadow: 0 0 1rem ${colors.dark};
  }
`
