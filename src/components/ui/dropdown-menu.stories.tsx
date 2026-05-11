import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        記事の操作
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>この記事について</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          ブックマーク
          <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          リンクをコピー
          <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>共有</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>X (Twitter)</DropdownMenuItem>
            <DropdownMenuItem>Mastodon</DropdownMenuItem>
            <DropdownMenuItem>メールで送る</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          ライブラリから削除
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        表示設定
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>表示</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>目次</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>
          関連記事
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>脚注を展開</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        文字サイズ
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-44">
        <DropdownMenuLabel>本文の大きさ</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="md">
          <DropdownMenuRadioItem value="sm">小</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="md">中</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lg">大</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
