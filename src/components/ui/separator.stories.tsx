import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[360px]">
      <h3 className="text-base font-semibold">静かな朝の読書</h3>
      <p className="text-xs text-muted-foreground">2026-05-04 — Reading Notes</p>
      <Separator className="my-4" />
      <p className="text-sm leading-relaxed text-muted-foreground">
        コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、一日の輪郭が静かに立ち上がる。
      </p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-4 text-sm">
      <span>Essays</span>
      <Separator orientation="vertical" />
      <span>Field Notes</span>
      <Separator orientation="vertical" />
      <span>Archive</span>
    </div>
  ),
}
