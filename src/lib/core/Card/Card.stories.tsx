import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "."

const Content = () => (
  <>
    <h4>Any content can write here as children.</h4>
    <p>
      Example Paragraph. You can show what{" "}
      <a href="https://en.wikipedia.org/wiki/Gymnop%C3%A9dies">gymnopedies</a>{" "}
      in Wikipedia.
    </p>
  </>
)

const meta = {
  title: "core/Card",
  component: Card,
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
    children: <Content />,
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
