import type { Meta, StoryObj } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { HeaderNavigation } from "."

const meta = {
  title: "HeaderNavigation",
  component: HeaderNavigation,
  args: {
    title: "Site Name",
    menuItems: [
      { name: "Home", onClick: action("onClickHome") },
      { name: "About", onClick: action("onClickAbout") },
      { name: "Contact", onClick: action("onClickContact") },
    ],
    currentIndex: 0,
  },
} satisfies Meta<typeof HeaderNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
