import type { Meta, StoryObj } from "@storybook/react-vite"
import { DateTime } from "."

const meta = {
  title: "core/DateTime",
  component: DateTime,
  args: {
    dateString: "2021-10-01T00:00:00Z",
    formatStr: "MMMM dd, yyyy",
  },
} satisfies Meta<typeof DateTime>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
