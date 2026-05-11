import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ArrowRightIcon,
  BookmarkIcon,
  ClockIcon,
  FileTextIcon,
  HashIcon,
  RssIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const meta = {
  title: "UI/Command",
  component: Command,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-[420px] rounded-md border border-border bg-popover shadow-lg">
      <CommandInput placeholder="記事・タグを検索…" />
      <CommandList>
        <CommandEmpty>該当する記事は見つかりませんでした。</CommandEmpty>

        <CommandGroup heading="最新の記事">
          <CommandItem>
            <FileTextIcon />
            <span>静かな朝の読書</span>
            <CommandShortcut>2026-05-04</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileTextIcon />
            <span>図書館の午後</span>
            <CommandShortcut>2026-04-21</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileTextIcon />
            <span>余白の手帖から</span>
            <CommandShortcut>2026-04-02</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="ナビゲーション">
          <CommandItem>
            <BookmarkIcon />
            <span>ブックマーク</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ClockIcon />
            <span>履歴</span>
            <CommandShortcut>⌘Y</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <RssIcon />
            <span>RSS を購読</span>
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="タグ">
          <CommandItem>
            <HashIcon />
            <span>読書ノート</span>
            <ArrowRightIcon className="ml-auto" />
          </CommandItem>
          <CommandItem>
            <HashIcon />
            <span>フィールド</span>
            <ArrowRightIcon className="ml-auto" />
          </CommandItem>
          <CommandItem>
            <HashIcon />
            <span>音楽</span>
            <ArrowRightIcon className="ml-auto" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
