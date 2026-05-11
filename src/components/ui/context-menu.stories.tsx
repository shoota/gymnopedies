import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const meta = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-44 w-80 items-center justify-center rounded-md border border-dashed border-border bg-card/40 text-sm text-muted-foreground">
        本文を右クリック
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuLabel>選択範囲</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          コピー
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          引用としてコピー
          <ContextMenuShortcut>⌘⇧C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>ハイライト</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>金色</ContextMenuItem>
            <ContextMenuItem>深緑</ContextMenuItem>
            <ContextMenuItem>埋火</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>脚注に追加</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>本文表示</ContextMenuLabel>
        <ContextMenuRadioGroup value="serif">
          <ContextMenuRadioItem value="serif">Serif</ContextMenuRadioItem>
          <ContextMenuRadioItem value="sans">Sans</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          注釈を削除
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
