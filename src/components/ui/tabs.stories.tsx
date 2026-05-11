import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="article" className="w-[480px]">
      <TabsList>
        <TabsTrigger value="article">本文</TabsTrigger>
        <TabsTrigger value="toc">目次</TabsTrigger>
        <TabsTrigger value="notes">脚注</TabsTrigger>
      </TabsList>
      <TabsContent value="article">
        <div className="space-y-3 rounded-md border border-border bg-card/30 p-4 text-sm leading-relaxed">
          <h3 className="font-serif text-base">静かな朝の読書</h3>
          <p className="text-muted-foreground">
            コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、一日の輪郭が静かに立ち上がる。
          </p>
          <p className="text-muted-foreground">
            まだ世界が言葉になりきらないこの時間、頁の上でだけ意味は確かさを取り戻す。
          </p>
        </div>
      </TabsContent>
      <TabsContent value="toc">
        <ol className="list-decimal space-y-2 rounded-md border border-border bg-card/30 p-4 pl-8 text-sm text-muted-foreground">
          <li>序章 — 沈黙の前に</li>
          <li>朝の頁</li>
          <li>余白について</li>
          <li>夕暮れの読書</li>
        </ol>
      </TabsContent>
      <TabsContent value="notes">
        <ul className="space-y-2 rounded-md border border-border bg-card/30 p-4 text-sm text-muted-foreground">
          <li>※1 — 引用元: Maya Tanaka『余白の手帖』</li>
          <li>※2 — 図版は1973年版から再構成</li>
          <li>※3 — 訳注は編集部による</li>
        </ul>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="latest" className="w-[420px]">
      <TabsList variant="line">
        <TabsTrigger value="latest">最新</TabsTrigger>
        <TabsTrigger value="popular">よく読まれた</TabsTrigger>
        <TabsTrigger value="archive">アーカイブ</TabsTrigger>
      </TabsList>
      <TabsContent value="latest">
        <p className="px-1 pt-3 text-sm text-muted-foreground">
          2026-05-04 — 静かな朝の読書
        </p>
      </TabsContent>
      <TabsContent value="popular">
        <p className="px-1 pt-3 text-sm text-muted-foreground">
          2026-03-12 — 図書館の午後
        </p>
      </TabsContent>
      <TabsContent value="archive">
        <p className="px-1 pt-3 text-sm text-muted-foreground">
          2025-11-08 — 冬の余白
        </p>
      </TabsContent>
    </Tabs>
  ),
}
