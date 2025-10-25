// to fix tsconfig jsx-react / https://github.com/jaredpalmer/tsdx/issues/1149
import React from "react"
import { Global } from "@emotion/react"

import { global } from "../src/lib/theme/globals"

import type { Preview } from "@storybook/react-vite"
import theme from "./theme"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme,
    },
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={global} />
        <Story />
      </>
    ),
  ],
}

export default preview
