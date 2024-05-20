import styled from "@emotion/styled"
import { PropsWithChildren } from "react"
import { colors } from "../../theme/color"

export const Content = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  padding: 16px;
  img {
    border-radius: 2px;
    box-shadow: 0 0 24px ${colors.dark};
  }
`
