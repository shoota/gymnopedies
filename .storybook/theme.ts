import { create } from "storybook/theming"

// Import the color values from our theme
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
  typography: {
    fontFamily: {
      serif:
        '"Merriweather", "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif',
      mono: "monospace",
    },
  },
}

export default create({
  base: "dark",

  // Brand
  brandTitle: "Gymnopédies",
  brandUrl: "/",
  // brandImage: undefined, // Add logo path if needed

  // Colors based on our theme variables
  colorPrimary: primitive.colors.default,
  colorSecondary: primitive.colors.main,

  // UI colors
  appBg: primitive.colors.dark,
  appContentBg: primitive.colors.dark,
  appBorderColor: primitive.colors.tone,
  appBorderRadius: 4,

  // Typography
  fontBase: primitive.typography.fontFamily.serif,
  fontCode: primitive.typography.fontFamily.mono,

  // Text colors
  textColor: primitive.colors.tone,
  textInverseColor: primitive.colors.link,
  textMutedColor: primitive.colors.default,

  // Toolbar colors
  barTextColor: primitive.colors.light,
  barSelectedColor: primitive.colors.main,
  barBg: primitive.colors.dark,

  // Form colors
  inputBg: primitive.colors.base,
  inputBorder: primitive.colors.default,
  inputTextColor: primitive.colors.light,
  inputBorderRadius: 4,

  // Button colors
  buttonBg: primitive.colors.main,
  buttonBorder: primitive.colors.tone,
  booleanBg: primitive.colors.main,
  booleanSelectedBg: primitive.colors.default,
})
