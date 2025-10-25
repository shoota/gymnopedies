import type { Meta, StoryObj } from "@storybook/react-vite"
import { Picture } from "."

const meta = {
  title: "core/Picture",
  component: Picture,
  args: {
    image: { src: "/image/example.jpg", height: undefined, transition: false },
    imageCaption: (
      <>
        Photo by <a>@shoota</a> in 2024
      </>
    ),
  },
} satisfies Meta<typeof Picture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SpecificHeight: Story = {
  args: {
    image: {
      src: "/image/example.jpg",
      height: "200px",
      objectPosition: "0 20%",
    },
  },
}
