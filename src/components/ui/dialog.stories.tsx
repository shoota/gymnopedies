import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        著者情報を見る
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>エリック・サティについて</DialogTitle>
          <DialogDescription>
            1866年フランス・オンフルール生まれの作曲家。代表作『ジムノペディ』に代表される静謐なピアノ曲で、20世紀音楽の地平を切り拓いた異端児。
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm leading-relaxed text-muted-foreground">
          家具のように生活に溶け込む音楽を提唱した「家具の音楽 (musique
          d'ameublement)」は、後のアンビエント・ミュージックの源流とも言われています。
        </p>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            閉じる
          </DialogClose>
          <Button>記事を続けて読む</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithLongFormContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>抜粋を読む</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>静寂のなかで聴く三つの旋律</DialogTitle>
          <DialogDescription>2025年4月12日 ・ 読了 6分</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            最初の主題は、夜更けに窓辺で聴くピアノのように、ためらいながら立ち上がる。サティはそれを「ゆっくりと、痛みをもって」と書き残した。
          </p>
          <p>
            二つ目の旋律はもっと素朴で、まるで子どもが綴る手紙のような誠実さがある。三つ目に至ってようやく、私たちは静寂の意味を理解しはじめる。
          </p>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>
            あとで読む
          </DialogClose>
          <Button>本文へ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
