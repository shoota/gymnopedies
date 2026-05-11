import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        あとで読む
      </TooltipTrigger>
      <TooltipContent>この記事をブックマークに保存</TooltipContent>
    </Tooltip>
  ),
}

export const HintText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="ghost" size="icon" />}>
        ☆
      </TooltipTrigger>
      <TooltipContent side="top">お気に入りに追加する</TooltipContent>
    </Tooltip>
  ),
}

export const WithSides: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          上
        </TooltipTrigger>
        <TooltipContent side="top">読了まで 6 分</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          右
        </TooltipTrigger>
        <TooltipContent side="right">2025年4月12日 公開</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          下
        </TooltipTrigger>
        <TooltipContent side="bottom">著者 高橋アキ</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          左
        </TooltipTrigger>
        <TooltipContent side="left">タグ ・ 随筆</TooltipContent>
      </Tooltip>
    </div>
  ),
}
