import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleMeta: Story = {
  render: () => (
    <Collapsible className="w-[420px] rounded-md border border-border/60 bg-card/40 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-serif text-base text-foreground">
            On Slow Mornings
          </h3>
          <p className="text-xs text-muted-foreground">
            2026-05-04 — Maya Tanaka — 5 min read
          </p>
        </div>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs text-muted-foreground"
            />
          }
        >
          More details
          <ChevronsUpDownIcon className="size-3.5" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-3 space-y-2 border-t border-border/40 pt-3 text-xs text-muted-foreground">
        <p>
          <span className="text-foreground">Tags:</span> reading-notes ·
          mornings · essay
        </p>
        <p>
          <span className="text-foreground">Series:</span> A Year of Quiet Pages
          (4 / 12)
        </p>
        <p>
          <span className="text-foreground">Last edited:</span> 2026-05-08
          22:14 JST
        </p>
        <p className="leading-relaxed">
          下書きから 3 度の推敲を経て公開。引用は『静かな朝のための覚書』より。
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <Collapsible
      defaultOpen
      className="w-[420px] rounded-md border border-border/60 bg-card/40 p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-serif text-base text-foreground">
            図書館の午後
          </h3>
          <p className="text-xs text-muted-foreground">
            2026-04-21 — フィールドノート — 7 min read
          </p>
        </div>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs text-muted-foreground"
            />
          }
        >
          詳細を隠す
          <ChevronsUpDownIcon className="size-3.5" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-3 space-y-2 border-t border-border/40 pt-3 text-xs text-muted-foreground">
        <p>
          <span className="text-foreground">Tags:</span> library · afternoon ·
          field-notes
        </p>
        <p>
          <span className="text-foreground">引用文献:</span>{" "}
          『午後の図書館にて』『紙の上の影』
        </p>
        <p className="leading-relaxed">
          木の机に陽が落ちて、隣の席の頁をめくる音だけが、確かな時間の証になる。
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
}
