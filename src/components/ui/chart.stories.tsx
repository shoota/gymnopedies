import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const readingData = [
  { day: "Mon", minutes: 32 },
  { day: "Tue", minutes: 18 },
  { day: "Wed", minutes: 45 },
  { day: "Thu", minutes: 12 },
  { day: "Fri", minutes: 28 },
  { day: "Sat", minutes: 64 },
  { day: "Sun", minutes: 51 },
]

const chartConfig = {
  minutes: {
    label: "Reading minutes",
    color: "var(--primary)",
  },
} satisfies ChartConfig

const meta = {
  title: "UI/Chart",
  component: ChartContainer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const ReadingMinutesPerDay: Story = {
  args: { config: chartConfig, children: <span /> },
  render: () => (
    <div className="w-[560px] rounded-md border border-border/60 bg-card/40 p-5">
      <header className="mb-4 space-y-1">
        <h3 className="font-serif text-base text-foreground">
          今週の読書時間
        </h3>
        <p className="text-xs text-muted-foreground">
          2026-05-04 から 2026-05-10 までの記録（分）
        </p>
      </header>
      <ChartContainer config={chartConfig} className="h-[240px] w-full">
        <BarChart data={readingData} margin={{ left: 4, right: 4 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={32}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="minutes"
            fill="var(--color-minutes)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
      <p className="mt-3 text-xs text-muted-foreground">
        週末にかけてページがめくれる速度が上がる傾向。
      </p>
    </div>
  ),
}

export const Compact: Story = {
  args: { config: chartConfig, children: <span /> },
  render: () => (
    <div className="w-[360px] rounded-md border border-border/60 bg-card/40 p-4">
      <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
        Weekly reading
      </p>
      <ChartContainer config={chartConfig} className="h-[160px] w-full">
        <BarChart data={readingData} margin={{ left: 0, right: 0 }}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={6}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="minutes"
            fill="var(--color-minutes)"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  ),
}
