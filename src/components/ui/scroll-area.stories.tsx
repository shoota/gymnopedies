import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const longEssay = `静かな朝、コーヒーの湯気越しに本のページをめくる。

その小さな所作のなかに、一日の輪郭が少しずつ立ち上がってくる。窓の外では、雨が屋根を叩く音が一定のリズムを刻み、その音は遠くで響くピアノのように、心の奥のほうにある何かをそっと撫でていく。

I have come to believe that the act of reading slowly — without the urge to finish, without the urge to extract — is itself a kind of practice. It teaches us to stay. It teaches us that not every sentence is a destination; some are simply the road.

書店の二階で見つけた古い詩集には、誰かが鉛筆で薄く下線を引いた跡があった。その人は何を思って、どんな朝にこの一行を選んだのだろう。線はやがて消えるけれど、線を引いた行為そのものは、不思議と長く残るような気がする。

There is a quietness in the late afternoon that doesn't exist anywhere else. The light leans, the air softens, and the books on the shelf seem to lean toward you, as if they too were waiting for the day to settle.

ページをめくる音、ノートに書きつける鉛筆の音、湯気の立つカップが机に置かれる音。それらはすべて、誰のためでもなく、ただこの時間のためにある。

Reading, in the end, is less about the books than about the kind of attention they teach us to give to the world. And in that sense, every quiet morning is a small reunion with ourselves.`

const archive = [
  { id: 1, title: "静かな朝の読書", date: "2026-05-04" },
  { id: 2, title: "On Slow Mornings", date: "2026-04-27" },
  { id: 3, title: "図書館の午後", date: "2026-04-21" },
  { id: 4, title: "The Margin of a Page", date: "2026-04-14" },
  { id: 5, title: "夜のための短い読書", date: "2026-04-07" },
  { id: 6, title: "A Notebook in Winter", date: "2026-03-31" },
  { id: 7, title: "本棚の地図", date: "2026-03-24" },
  { id: 8, title: "Coffee, Then Books", date: "2026-03-17" },
  { id: 9, title: "古書店の階段で", date: "2026-03-10" },
  { id: 10, title: "Reading at Dusk", date: "2026-03-03" },
  { id: 11, title: "雪の日の傍線", date: "2026-02-24" },
  { id: 12, title: "Letters Never Sent", date: "2026-02-17" },
]

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[280px] w-[420px] rounded-md border p-4">
      <p className="whitespace-pre-line text-sm leading-relaxed">{longEssay}</p>
    </ScrollArea>
  ),
}

export const ArchiveList: Story = {
  render: () => (
    <ScrollArea className="h-[280px] w-[320px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-semibold">Archive</h4>
        {archive.map((entry, i) => (
          <div key={entry.id}>
            <div className="flex items-baseline justify-between py-2 text-sm">
              <span>{entry.title}</span>
              <span className="text-xs text-muted-foreground">
                {entry.date}
              </span>
            </div>
            {i < archive.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
