import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "essay" },
}

export const Secondary: Story = {
  args: { variant: "secondary", children: "field notes" },
}

export const Destructive: Story = {
  args: { variant: "destructive", children: "下書き" },
}

export const Outline: Story = {
  args: { variant: "outline", children: "2026-05" },
}

export const Ghost: Story = {
  args: { variant: "ghost", children: "draft" },
}

export const LinkBadge: Story = {
  args: { variant: "link", children: "#reading" },
}

export const TagRow: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>essay</Badge>
      <Badge variant="secondary">interview</Badge>
      <Badge variant="outline">2026</Badge>
      <Badge variant="outline">tokyo</Badge>
      <Badge variant="ghost">#reading</Badge>
    </div>
  ),
}
