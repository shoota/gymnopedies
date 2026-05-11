import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertTriangle, BookOpen } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-[460px]">
      <BookOpen />
      <AlertTitle>新しい連載が始まりました</AlertTitle>
      <AlertDescription>
        毎週水曜更新「夜のための短い読書」全12回。最初のエッセイは 2026-05-13 公開予定です。
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[460px]">
      <AlertTriangle />
      <AlertTitle>アーカイブの読み込みに失敗しました</AlertTitle>
      <AlertDescription>
        Could not load the 2025 archive. Please refresh the page or try again
        later.
      </AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[460px]">
      <AlertTitle>今月の特集はまもなく公開されます</AlertTitle>
    </Alert>
  ),
}
