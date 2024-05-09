// to fix tsconfig jsx-react / https://github.com/jaredpalmer/tsdx/issues/1149
import React from "react"
import { Global } from "@emotion/react"

import { global } from "../src/lib/theme/globals.css"

import type { Preview } from "@storybook/react"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
