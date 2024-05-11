import type { Meta, StoryObj } from "@storybook/react"
import { Picture } from "."

const meta = {
  title: "core/Picture",
  component: Picture,
  args: {
    image: { src: "/image/example.jpg" },
    imageCaption: (
      <>
        Photo by <a>@shoota</a> in 2024
      </>
    ),
    transition: false,
  },
} satisfies Meta<typeof Picture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
