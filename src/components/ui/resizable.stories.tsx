import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const sidebarItems = [
  "静かな朝の読書",
  "On Slow Mornings",
  "図書館の午後",
  "Reading by Lamplight",
  "本棚の整理",
]

const meta = {
  title: "UI/Resizable",
  component: ResizablePanelGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarAndContent: Story = {
  render: () => (
    <div className="h-[420px] w-[720px] overflow-hidden rounded-md border border-border/60 bg-card/40">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={28} minSize={20}>
          <nav className="flex h-full flex-col gap-1 p-4">
            <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
              Reading list
            </p>
            {sidebarItems.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded px-2 py-1.5 text-left text-sm text-foreground transition-colors hover:bg-muted/40"
              >
                {item}
              </button>
            ))}
          </nav>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={72}>
          <article className="flex h-full flex-col gap-3 overflow-y-auto p-6">
            <header className="space-y-1">
              <h2 className="font-serif text-lg text-foreground">
                静かな朝の読書
              </h2>
              <p className="text-xs text-muted-foreground">
                2026-05-04 — Maya Tanaka
              </p>
            </header>
            <p className="text-sm leading-relaxed text-muted-foreground">
              コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、
              一日の輪郭が静かに立ち上がる。窓の外ではまだ街が眠っていて、
              時計の針だけがゆっくりと進んでいる。
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              読み終えた一節を声に出さずに反芻し、湯気がもう一度立ち上るのを待つ。
              そんな朝が、しばらく続いている。
            </p>
          </article>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}

export const VerticalSplit: Story = {
  render: () => (
    <div className="h-[420px] w-[640px] overflow-hidden rounded-md border border-border/60 bg-card/40">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full flex-col gap-2 p-5">
            <h3 className="font-serif text-base text-foreground">Preview</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              木の机に陽が落ちて、隣の席の頁をめくる音だけが、確かな時間の証になる。
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full flex-col gap-2 p-5">
            <h3 className="font-serif text-base text-foreground">Notes</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>· 引用は『午後の図書館にて』より</li>
              <li>· 推敲 3 回・公開予定 2026-04-22</li>
              <li>· 関連: 図書館シリーズ</li>
            </ul>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
}
