import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    id: "item-1",
    question: "gymnopedies はどんなブログのためのデザインシステムですか？",
    answer:
      "夜に読む読書ノートや静かなエッセイのための、ダークトーンを基調とした読み物用デザインシステムです。落ち着いた配色とセリフ体で、長文を心地よく追えるよう調整されています。",
  },
  {
    id: "item-2",
    question: "ライトテーマも提供していますか？",
    answer:
      "現時点では深い夜色を主役にしたダークテーマのみを正式にサポートしています。ライトテーマは将来的なロードマップに含まれていますが、デフォルトでは `.dark` を前提に構築されています。",
  },
  {
    id: "item-3",
    question: "shadcn/ui のコンポーネントをそのまま使えますか？",
    answer:
      "はい。本デザインシステムは shadcn CLI で生成されたコンポーネントを土台にしています。トークンや一部スタイルだけを上書きしているため、shadcn の更新を取り込みやすい構成になっています。",
  },
  {
    id: "item-4",
    question: "フィードバックや要望はどこに送れますか？",
    answer:
      "GitHub の Issue にお願いします。読書体験を損なわない範囲で、書き手にとって扱いやすいコンポーネントを少しずつ拡張していく予定です。",
  },
]

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const SingleFAQ: Story = {
  args: {},
  render: () => (
    <Accordion
      defaultValue={["item-1"]}
      className="w-[480px] rounded-md border border-border/60 bg-card/40 px-4"
    >
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  args: {},
  render: () => (
    <Accordion
      multiple
      defaultValue={["item-1", "item-3"]}
      className="w-[480px] rounded-md border border-border/60 bg-card/40 px-4"
    >
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}
