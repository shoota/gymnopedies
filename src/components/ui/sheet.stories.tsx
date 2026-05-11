import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative flex h-[480px] w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        目次を開く
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>今月の特集</SheetTitle>
          <SheetDescription>
            静けさをめぐる5つの随想 — 2025年5月号
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-4 text-sm leading-relaxed">
          <a className="hover:underline" href="#1">
            静寂のなかで聴く三つの旋律
          </a>
          <a className="hover:underline" href="#2">
            ピアニスト・高橋アキの手記より
          </a>
          <a className="hover:underline" href="#3">
            家具の音楽、その後
          </a>
          <a className="hover:underline" href="#4">
            パリの薄明、モンマルトルの一日
          </a>
        </nav>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>
            閉じる
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        アーカイブ
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>アーカイブ</SheetTitle>
          <SheetDescription>過去のすべての号を遡る</SheetDescription>
        </SheetHeader>
        <ul className="space-y-2 px-4 text-sm text-muted-foreground">
          <li>2025年5月 — 静けさの随想</li>
          <li>2025年4月 — 雨の手紙</li>
          <li>2025年3月 — 春の余白</li>
          <li>2025年2月 — 冬眠する読者へ</li>
        </ul>
      </SheetContent>
    </Sheet>
  ),
}

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        お知らせを表示
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>新刊のお知らせ</SheetTitle>
          <SheetDescription>
            『gymnopedies — 静けさをめぐる5つの随想』が刊行されました。
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>詳しく読む</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        この記事を共有
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>共有する</SheetTitle>
          <SheetDescription>
            読み終えた静けさを誰かに分けてみませんか
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-2 p-4">
          <Button variant="outline">リンクをコピー</Button>
          <Button variant="outline">メールで送る</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}
