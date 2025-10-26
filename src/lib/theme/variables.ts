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
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px (h6)
    xl: "1.25rem", // 20px (h5)
    "2xl": "1.375rem", // 22px (h4)
    "3xl": "1.5rem", // 24px (h3)
    "4xl": "1.625rem", // 26px (h2)
    "5xl": "1.75rem", // 28px (h1)
  },
  spacing: {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "2.5rem", // 40px
    "2xl": "3rem", // 48px
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "50%",
  },
  shadows: {
    boxShadow: {
      neutral: "0 2px 8px rgba(153, 153, 153, 0.15)", // default color
      softGlow:
        "0 0 16px rgba(207, 216, 222, 0.3), 0 2px 8px rgba(207, 216, 222, 0.2)", // tone color
      strongGlow:
        "0 0 24px rgba(213, 202, 134, 0.4), 0 4px 16px rgba(213, 202, 134, 0.3)", // link color
      lightSoft:
        "0 1px 4px rgba(4, 37, 43, 0.1), 0 2px 8px rgba(4, 37, 43, 0.08)", // dark color
      lightSharp:
        "0 2px 8px rgba(4, 37, 43, 0.2), 0 4px 16px rgba(4, 37, 43, 0.15)", // dark color
    },
    textShadow: {
      soft: "0 2px 4px rgba(51, 51, 51, 0.4)", // base color
      strong: "0 2px 4px rgba(4, 37, 43, 0.5)", // dark color
      glow: "0 0 8px rgba(213, 202, 134, 0.6), 0 1px 2px rgba(213, 202, 134, 0.4)", // link color
      lightBlur: "0 0 12px rgba(255, 255, 255, 0.8), 0 0 6px rgba(207, 216, 222, 0.6)", // white + tone color for light blur effect
    },
  },
  typography: {
    fontFamily: {
      serif:
        '"Merriweather", "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif',
      mono: "monospace",
    },
    fontWeight: {
      normal: "400",
      bold: "bold",
      bolder: "bolder",
    },
    lineHeight: {
      tight: "1.2",
      base: "1.3",
      relaxed: "1.5",
    },
    letterSpacing: {
      tight: "-0.025em",
      base: "0",
      wide: "0.5px",
    },
  },
}

export const variables = css`
  :root {
    /* Colors */
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

    /* Font Sizes */
    --font-size-xs: ${primitive.fontSizes.xs};
    --font-size-sm: ${primitive.fontSizes.sm};
    --font-size-base: ${primitive.fontSizes.base};
    --font-size-lg: ${primitive.fontSizes.lg};
    --font-size-xl: ${primitive.fontSizes.xl};
    --font-size-2xl: ${primitive.fontSizes["2xl"]};
    --font-size-3xl: ${primitive.fontSizes["3xl"]};
    --font-size-4xl: ${primitive.fontSizes["4xl"]};
    --font-size-5xl: ${primitive.fontSizes["5xl"]};

    /* Spacing */
    --spacing-xs: ${primitive.spacing.xs};
    --spacing-sm: ${primitive.spacing.sm};
    --spacing-md: ${primitive.spacing.md};
    --spacing-lg: ${primitive.spacing.lg};
    --spacing-xl: ${primitive.spacing.xl};
    --spacing-2xl: ${primitive.spacing["2xl"]};

    /* Border Radius - Primitive */
    --border-radius-none: ${primitive.borderRadius.none};
    --border-radius-sm: ${primitive.borderRadius.sm};
    --border-radius-md: ${primitive.borderRadius.md};
    --border-radius-lg: ${primitive.borderRadius.lg};
    --border-radius-xl: ${primitive.borderRadius.xl};
    --border-radius-2xl: ${primitive.borderRadius["2xl"]};
    --border-radius-full: ${primitive.borderRadius.full};

    /* Border Radius - Semantic */
    --border-radius-outer: var(--border-radius-lg);
    --border-radius-inner: var(--border-radius-sm);
    --border-radius-full-semantic: var(--border-radius-full);

    /* Typography */
    --font-family-serif: ${primitive.typography.fontFamily.serif};
    --font-family-mono: ${primitive.typography.fontFamily.mono};

    --font-weight-normal: ${primitive.typography.fontWeight.normal};
    --font-weight-bold: ${primitive.typography.fontWeight.bold};
    --font-weight-bolder: ${primitive.typography.fontWeight.bolder};

    --line-height-tight: ${primitive.typography.lineHeight.tight};
    --line-height-base: ${primitive.typography.lineHeight.base};
    --line-height-relaxed: ${primitive.typography.lineHeight.relaxed};

    --letter-spacing-tight: ${primitive.typography.letterSpacing.tight};
    --letter-spacing-base: ${primitive.typography.letterSpacing.base};
    --letter-spacing-wide: ${primitive.typography.letterSpacing.wide};

    /* Box Shadows */
    --box-shadow-neutral: ${primitive.shadows.boxShadow.neutral};
    --box-shadow-soft-glow: ${primitive.shadows.boxShadow.softGlow};
    --box-shadow-strong-glow: ${primitive.shadows.boxShadow.strongGlow};
    --box-shadow-light-soft: ${primitive.shadows.boxShadow.lightSoft};
    --box-shadow-light-sharp: ${primitive.shadows.boxShadow.lightSharp};

    /* Text Shadows */
    --text-shadow-soft: ${primitive.shadows.textShadow.soft};
    --text-shadow-strong: ${primitive.shadows.textShadow.strong};
    --text-shadow-glow: ${primitive.shadows.textShadow.glow};
    --text-shadow-light-blur: ${primitive.shadows.textShadow.lightBlur};
  }
`
