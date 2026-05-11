import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ComponentProps } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

type DrawerProps = ComponentProps<typeof Drawer>

const meta: Meta<DrawerProps> = {
  title: "UI/Drawer",
  component: Drawer,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="relative flex h-[480px] w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<DrawerProps>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">目次を開く</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>今月の目次</DrawerTitle>
          <DrawerDescription>
            2025年5月号 ・ 静けさをめぐる5つの随想
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 px-4 pb-2 text-sm leading-relaxed text-muted-foreground">
          <p>1. 静寂のなかで聴く三つの旋律</p>
          <p>2. ピアニスト・高橋アキの手記より</p>
          <p>3. 家具の音楽、その後</p>
          <p>4. パリの薄明、モンマルトルの一日</p>
          <p>5. 編集後記</p>
        </div>
        <DrawerFooter>
          <Button>はじめから読む</Button>
          <DrawerClose asChild>
            <Button variant="outline">閉じる</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const BottomSheet: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>この記事を共有</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>共有する</DrawerTitle>
          <DrawerDescription>
            『静寂のなかで聴く三つの旋律』を共有します
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-2 gap-2 px-4 pb-2">
          <Button variant="outline">リンクをコピー</Button>
          <Button variant="outline">メールで送る</Button>
          <Button variant="outline">X (Twitter)</Button>
          <Button variant="outline">Bluesky</Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">閉じる</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const RightSide: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">脚注を開く</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>脚注</DrawerTitle>
          <DrawerDescription>本文で参照された注釈の一覧</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            *1 — 家具の音楽 (musique d'ameublement)
            は、サティが1917年に提唱した、空間に溶け込むことを目的とした音楽の概念。
          </p>
          <p>
            *2 —
            ジムノペディ第一番は1888年に作曲され、長らく忘れられていたが20世紀半ばに再発見された。
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  ),
}
