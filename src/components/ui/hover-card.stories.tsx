import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger delay={100} render={<Button variant="link" />}>
        @erik_satie
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">エリック・サティ</h4>
          <p className="text-sm text-muted-foreground">
            1866 - 1925 / フランスの作曲家。『ジムノペディ』『グノシエンヌ』などの静謐なピアノ作品で知られる。
          </p>
          <p className="text-xs text-muted-foreground">
            初出 — 2025年5月号「静けさをめぐる5つの随想」
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const AuthorProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger delay={100} render={<Button variant="link" />}>
        著者プロフィール
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            TA
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">高橋アキ</h4>
            <p className="text-xs text-muted-foreground">編集者・随筆家</p>
            <p className="text-sm leading-relaxed">
              静けさと音楽を主題にした連載を執筆。著書に『余白の聴き方』。
            </p>
            <p className="text-xs text-muted-foreground">
              この号で 3 本の記事を寄稿
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const InlineCitation: Story = {
  render: () => (
    <p className="max-w-md text-sm leading-relaxed">
      静けさを語るとき、私たちはしばしば{" "}
      <HoverCard>
        <HoverCardTrigger
          delay={100}
          className="cursor-help underline decoration-dotted underline-offset-4"
        >
          ジョン・ケージ
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1 text-sm">
            <h4 className="font-semibold">ジョン・ケージ</h4>
            <p className="text-muted-foreground">
              1912 - 1992 / アメリカの作曲家。代表作『4分33秒』で、無音もまた音楽であることを示した。
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      の名を呼び寄せてしまう。
    </p>
  ),
}
