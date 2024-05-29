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
  padding: 1rem 2.4rem;
  background-color: ${colors.dark};
  background-image: linear-gradient(
    ${colors.dark} 26%,
    rgb(${colorsRGB.default}, 0.1) 80%,
    ${colors.dark} 100%
  );
  font-size: 0.9rem;
  h1 {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 40em) {
    font-size: 0.9rem;
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
  gap: 1rem;
`

const MenuItem = styled.div`
  margin-right: 0.8rem;
  a {
    text-decoration: underline;
    text-decoration-color: ${colors.link};
  }
`

const Title = styled.h1`
  margin: 0;
`
