import styled from "@emotion/styled"
import { colors, colorsRGB } from "../../theme/color"
type Props = {
  title: string
  menuItems?: { name: string; onClick?: () => void }[]
  currentIndex?: number
}

export const HeaderNavigation = ({ title, menuItems, currentIndex }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {menuItems && (
        <MenuContainer>
          {menuItems.map(({ name, onClick }, index) => {
            return (
              <MenuItem key={name}>
                {onClick && index !== currentIndex ? (
                  <a onClick={onClick}>{name}</a>
                ) : (
                  name
                )}
              </MenuItem>
            )
          })}
        </MenuContainer>
      )}
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 24px;
  background-color: ${colors.dark};
  background-image: linear-gradient(
    ${colors.dark} 26%,
    rgb(${colorsRGB.default}, 0.1) 80%,
    ${colors.dark} 100%
  );
  font-size: 0.625rem;
  h1 {
    flex-grow: 3;
    font-size: 1rem;
  }
  @media screen and (min-width: 40em) {
    font-size: 0.87rem;
    h1 {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 52em) {
    font-size: 1rem;
    h1 {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 64em) {
    font-size: 1rem;
    h1 {
      font-size: 1.8rem;
    }
  }
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`

const MenuItem = styled.div`
  a {
    text-decoration: underline;
    text-decoration-color: ${colors.link};
  }
`

const Title = styled.h1`
  margin: 0;
`
