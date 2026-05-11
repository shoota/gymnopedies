import type { Meta, StoryObj } from "@storybook/react-vite"
import { BookmarkIcon, ItalicIcon, MoonIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="ブックマーク">
      <BookmarkIcon />
      ブックマーク
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="夜の表示">
      <MoonIcon />
      夜の読書
    </Toggle>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <Toggle variant="outline" size="sm" aria-label="斜体">
      <ItalicIcon />
    </Toggle>
  ),
}
