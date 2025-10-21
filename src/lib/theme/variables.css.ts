import { css } from "@emotion/react"
import { hexToRgb } from "./colorUtils"

const primitive = {
  colors: {
    base: "#333333",
    main: "#35434c",
    default: "#999999",
    light: "#d6d6d6",
    dark: "#04252b",
    tone: "#cfd8de",
    link: "#d5ca86",
  },
}

export const variables = css`
  :root {
    --color-base: ${primitive.colors.base};
    --color-main: ${primitive.colors.main};
    --color-default: ${primitive.colors.default};
    --color-light: ${primitive.colors.light};
    --color-dark: ${primitive.colors.dark};
    --color-tone: ${primitive.colors.tone};
    --color-link: ${primitive.colors.link};
    --color-default-rgb: ${hexToRgb(primitive.colors.default)};
    --color-dark-rgb: ${hexToRgb(primitive.colors.dark)};
    --color-light-rgb: ${hexToRgb(primitive.colors.light)};
  }
`
