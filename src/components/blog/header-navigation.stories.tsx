import type { Meta, StoryObj } from "@storybook/react-vite"

import { HeaderNavigation } from "@/components/blog/header-navigation"

const meta = {
  title: "Blog/HeaderNavigation",
  component: HeaderNavigation,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-[960px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Gymnopédies",
  },
}

export const WithMenu: Story = {
  args: {
    title: "Gymnopédies",
    menuItems: [
      { name: "Home", onClick: () => undefined },
      { name: "Essays", onClick: () => undefined },
      { name: "Archive", onClick: () => undefined },
      { name: "About", onClick: () => undefined },
    ],
    currentIndex: 1,
  },
}

export const TitleOnly: Story = {
  args: {
    title: "静かな朝の読書",
  },
}
