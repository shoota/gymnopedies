import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { ratio: 16 / 9 },
  render: () => (
    <div className="w-[420px]">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#0a3a44] via-[#04252b] to-[#02161a] text-sm text-muted-foreground">
          16 : 9 — Cover image
        </div>
      </AspectRatio>
      <p className="pt-3 text-xs text-muted-foreground">
        cover for “静かな朝の読書” · 2026-05-04
      </p>
    </div>
  ),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: () => (
    <div className="w-[260px]">
      <AspectRatio ratio={1} className="overflow-hidden rounded-md">
        <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#333] text-sm text-muted-foreground">
          1 : 1 — Portrait
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  args: { ratio: 3 / 4 },
  render: () => (
    <div className="w-[220px]">
      <AspectRatio ratio={3 / 4} className="overflow-hidden rounded-md">
        <div className="flex size-full items-center justify-center bg-gradient-to-b from-[#d5ca86]/30 to-[#04252b] text-sm text-muted-foreground">
          3 : 4 — Book cover
        </div>
      </AspectRatio>
    </div>
  ),
}
