import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "."
import { DateTime } from "../DateTime"

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

const meta: Meta<typeof Card> = {
  title: "core/Card",
  component: Card,
  args: {
    image: { src: "/image/example.jpg" },
  },
}

export default meta

type Story = StoryObj<typeof Card>
export const Min: Story = {}

export const ContentsCard: Story = {
  args: {
    image: undefined,
    title: "Hello Everyone, I'm a cat.",
    heading: "YYYY-MM-DD (E)",
    description: "I'm a cat, and I'm here to say hello to you.",
    children: <Content />,
  },
}

export const Full: Story = {
  args: {
    title: "Hello Everyone, I'm a cat.",
    heading: "YYYY-MM-DD (E)",
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
}

export const Width: Story = {
  args: {
    width: "60%",
    maxWidth: "800px",
  },
}
export const JP: Story = {
  args: {
    title: "こんにちは。猫です。",
    description: "私は猫ですが、こんにちはをあなたに言いに来ました。",
  },
}

export const DateStamp: Story = {
  args: {
    children: (
      <div style={{ display: "flex", justifyContent: "end" }}>
        <DateTime dateString="2022-09-16" />
      </div>
    ),
  },
}
