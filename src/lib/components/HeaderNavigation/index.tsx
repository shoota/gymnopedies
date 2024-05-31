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
  background-color: rgb(${colorsRGB.dark}, 0.4);
  background-image: linear-gradient(
    rgb(${colorsRGB.light}, 0.1) 0%,
    rgb(${colorsRGB.dark}, 0.4) 4%,
    rgb(${colorsRGB.dark}, 0.4) 80%,
    rgb(${colorsRGB.dark}, 0.4) 90%,
    rgb(${colorsRGB.light}, 0.1) 100%
  );
  box-shadow: 0 0 2.5rem 0 rgb(${colorsRGB.light}, 0.3);
  font-size: 0.625rem;
  * {
    opacity: 1;
  }
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
