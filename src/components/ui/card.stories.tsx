import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>静かな朝の読書</CardTitle>
        <CardDescription>2026-05-04 — Reading Notes</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、一日の輪郭が静かに立ち上がる。
        </p>
      </CardContent>
      <CardFooter>
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          続きを読む
        </a>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>On Slow Mornings</CardTitle>
        <CardDescription>An essay by Maya Tanaka</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            保存
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Some mornings ask only that we sit with the light a little longer
          before naming the day.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-muted-foreground">5 min read</span>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="w-[380px] overflow-hidden p-0">
      <div className="h-40 w-full bg-gradient-to-br from-[#0a3a44] via-[#04252b] to-[#02161a]" />
      <CardHeader className="pt-6">
        <CardTitle>図書館の午後</CardTitle>
        <CardDescription>2026-04-21 — フィールドノート</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          木の机に陽が落ちて、隣の席の頁をめくる音だけが、確かな時間の証になる。
        </p>
      </CardContent>
      <CardFooter className="pb-6">
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          続きを読む
        </a>
      </CardFooter>
    </Card>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Card className="w-[320px]">
      <CardContent className="py-6">
        <p className="text-sm leading-relaxed">
          “We read to know we are not alone.”
        </p>
        <p className="mt-3 text-xs text-muted-foreground">— C.S. Lewis</p>
      </CardContent>
    </Card>
  ),
}
