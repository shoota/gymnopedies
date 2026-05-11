import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        用語の意味を見る
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>ジムノペディ</PopoverTitle>
          <PopoverDescription>
            古代ギリシア・スパルタで若者が裸で踊った祭典に由来する語。サティはこの言葉を、三つの静謐なピアノ曲のタイトルに用いた。
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        この段落について
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>段落の操作</PopoverTitle>
          <PopoverDescription>
            読者として、この一節にあなたなりの印をつけることができます。
          </PopoverDescription>
        </PopoverHeader>
        <div className="mt-4 flex flex-col gap-2">
          <Button size="sm" variant="ghost" className="justify-start">
            ハイライトを引く
          </Button>
          <Button size="sm" variant="ghost" className="justify-start">
            ブックマークに追加
          </Button>
          <Button size="sm" variant="ghost" className="justify-start">
            この一節を引用する
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const SimpleText: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="link" />}>
        脚注 *1
      </PopoverTrigger>
      <PopoverContent className="w-72 text-sm leading-relaxed">
        家具の音楽 (musique d'ameublement)
        は、サティが1917年に提唱した、空間に溶け込むことを目的とした音楽の概念。
      </PopoverContent>
    </Popover>
  ),
}
