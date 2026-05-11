import type { Meta, StoryObj } from "@storybook/react-vite"

import { DateTime } from "@/components/blog/date-time"

const meta = {
  title: "Blog/DateTime",
  component: DateTime,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DateTime>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dateString: "2026-05-11",
  },
}

export const JapaneseFormat: Story = {
  args: {
    dateString: "2026-05-11",
    formatStr: "yyyy年MM月dd日",
  },
}

export const WithCustomClassName: Story = {
  args: {
    dateString: "2026-05-11T08:30:00.000Z",
    formatStr: "MMMM dd, yyyy HH:mm",
    className: "text-primary text-sm tracking-wide",
  },
}
