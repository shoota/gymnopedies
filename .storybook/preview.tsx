import type { Preview } from "@storybook/react-vite"
import "../src/styles/globals.css"
import theme from "./theme"

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "gymnopedies-dark",
      values: [
        { name: "gymnopedies-dark", value: "#333333" },
        { name: "surface-dark", value: "#04252b" },
        { name: "tone-light", value: "#cfd8de" },
      ],
    },
    docs: {
      theme,
    },
  },
  decorators: [
    (Story) => (
      <div className="dark text-foreground font-serif p-8 min-h-[160px] w-full flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default preview
