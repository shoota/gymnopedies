import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("ブックマークに追加しました", {
            description: "『静寂のなかで聴く三つの旋律』をあとで読みます",
          })
        }
      >
        あとで読むに追加
      </Button>
    </div>
  ),
}

export const Success: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Toaster />
      <Button
        onClick={() =>
          toast.success("購読しました", {
            description: "次号からニュースレターをお届けします",
          })
        }
      >
        ニュースレターを購読
      </Button>
    </div>
  ),
}

export const ErrorVariant: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Toaster />
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("記事の読み込みに失敗しました", {
            description: "通信を確認してもう一度お試しください",
          })
        }
      >
        記事を再読込
      </Button>
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("下書きを保存しました", {
            description: "編集中の段落は自動的に保存されます",
            action: {
              label: "元に戻す",
              onClick: () => toast.success("操作を取り消しました"),
            },
          })
        }
      >
        下書きを保存
      </Button>
    </div>
  ),
}
