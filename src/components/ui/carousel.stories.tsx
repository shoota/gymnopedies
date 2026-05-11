import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const readingCards = [
  {
    title: "静かな朝の読書",
    date: "2026-05-04",
    excerpt:
      "コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、一日の輪郭が静かに立ち上がる。",
  },
  {
    title: "On Slow Mornings",
    date: "2026-04-28",
    excerpt:
      "Some mornings ask only that we sit with the light a little longer before naming the day.",
  },
  {
    title: "図書館の午後",
    date: "2026-04-21",
    excerpt:
      "木の机に陽が落ちて、隣の席の頁をめくる音だけが、確かな時間の証になる。",
  },
  {
    title: "Reading by Lamplight",
    date: "2026-04-12",
    excerpt:
      "A pool of amber light, a thin volume of poems, and the quiet thrum of the city outside the window.",
  },
  {
    title: "本棚の整理",
    date: "2026-03-30",
    excerpt:
      "背表紙を順に追っていくと、忘れていた季節の温度や、誰かに勧められた夜のことを思い出す。",
  },
]

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const ReadingCards: Story = {
  render: () => (
    <Carousel className="w-[640px]" opts={{ align: "start" }}>
      <CarouselContent>
        {readingCards.map((item) => (
          <CarouselItem key={item.title} className="md:basis-1/2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const ThreeAcross: Story = {
  render: () => (
    <Carousel className="w-[720px]" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {readingCards.map((item) => (
          <CarouselItem key={item.title} className="basis-1/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
