import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "続きを読む" },
}

export const Destructive: Story = {
  args: { variant: "destructive", children: "下書きを削除" },
}

export const Outline: Story = {
  args: { variant: "outline", children: "アーカイブを開く" },
}

export const Secondary: Story = {
  args: { variant: "secondary", children: "Subscribe" },
}

export const Ghost: Story = {
  args: { variant: "ghost", children: "もっと見る" },
}

export const Link: Story = {
  args: { variant: "link", children: "Read the full essay" },
}

export const Large: Story = {
  args: { size: "lg", children: "今月の特集を読む" },
}

export const Small: Story = {
  args: { size: "sm", variant: "outline", children: "tag: essay" },
}
