import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        下書きを破棄
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>編集中の下書きを破棄しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            最後の保存以降に書いた段落は失われます。あとで読み返したい一節があるなら、いったん保存することをおすすめします。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>編集に戻る</AlertDialogCancel>
          <AlertDialogAction>下書きを破棄</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ConfirmDestructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        この記事を削除
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>この記事を削除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            『静寂のなかで聴く三つの旋律』は完全に削除され、復元できません。読者からのコメントもあわせて消えます。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            記事を削除する
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="ghost" />}>
        購読を解除
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>購読を解除しますか？</AlertDialogTitle>
          <AlertDialogDescription>
            次号からのニュースレターは届かなくなります。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>戻る</AlertDialogCancel>
          <AlertDialogAction>解除する</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
