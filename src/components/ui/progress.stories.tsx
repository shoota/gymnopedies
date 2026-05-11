import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "@/components/ui/progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 33 },
  render: () => (
    <div className="w-[360px] space-y-2">
      <p className="text-xs text-muted-foreground">読書の進捗 — 33%</p>
      <Progress value={33} />
    </div>
  ),
}

export const TwoThirds: Story = {
  args: { value: 66 },
  render: () => (
    <div className="w-[360px] space-y-2">
      <p className="text-xs text-muted-foreground">Chapter 4 of 6 — 66%</p>
      <Progress value={66} />
    </div>
  ),
}

export const Complete: Story = {
  args: { value: 100 },
  render: () => (
    <div className="w-[360px] space-y-2">
      <p className="text-xs text-muted-foreground">読了 — 100%</p>
      <Progress value={100} />
    </div>
  ),
}

export const Stack: Story = {
  args: { value: 33 },
  render: () => (
    <div className="w-[360px] space-y-4">
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>静かな朝の読書</span>
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>On Slow Mornings</span>
          <span>66%</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>図書館の午後</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}
