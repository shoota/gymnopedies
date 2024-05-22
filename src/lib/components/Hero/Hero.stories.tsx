import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Hero"

const meta = {
  title: "Hero",
  component: Hero,
  args: {
    cover: "Hello Everyone, I'm a cat.",
    src: "/image/example.jpg",
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
