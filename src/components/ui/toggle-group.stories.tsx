import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleSelection: Story = {
  args: {},
  render: () => (
    <ToggleGroup
      variant="outline"
      defaultValue={["left"]}
      aria-label="本文の揃え"
    >
      <ToggleGroupItem value="left" aria-label="左揃え">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="中央揃え">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="右揃え">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const MultipleSelection: Story = {
  args: {},
  render: () => (
    <ToggleGroup
      multiple
      variant="outline"
      defaultValue={["bold"]}
      aria-label="文字装飾"
    >
      <ToggleGroupItem value="bold" aria-label="太字">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="下線">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const ReadingDensity: Story = {
  args: {},
  render: () => (
    <ToggleGroup
      defaultValue={["comfortable"]}
      spacing={1}
      aria-label="行間"
    >
      <ToggleGroupItem value="compact">詰め</ToggleGroupItem>
      <ToggleGroupItem value="comfortable">標準</ToggleGroupItem>
      <ToggleGroupItem value="airy">ゆったり</ToggleGroupItem>
    </ToggleGroup>
  ),
}
