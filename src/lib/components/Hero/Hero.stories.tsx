import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Hero"

const meta = {
  title: "Hero",
  component: Hero,
  args: {
    title: "Hello Everyone, I'm a cat.",
    description: "I'm a cat, and I'm here to say hello to you.",
    image: { src: "/image/example.jpg" },
    imageCaption: (
      <>
        Photo by <a>@shoota</a> in 2024
      </>
    ),
    onClick: action("onClick"),
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
