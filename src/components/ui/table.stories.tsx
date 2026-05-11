import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Article = {
  title: string
  date: string
  author: string
  tags: string[]
}

const articles: Article[] = [
  {
    title: "静かな朝の読書",
    date: "2026-05-04",
    author: "Maya Tanaka",
    tags: ["reading-notes", "morning"],
  },
  {
    title: "On Slow Mornings",
    date: "2026-04-28",
    author: "Maya Tanaka",
    tags: ["essay", "english"],
  },
  {
    title: "図書館の午後",
    date: "2026-04-21",
    author: "Ren Aoyama",
    tags: ["field-notes", "library"],
  },
  {
    title: "Reading by Lamplight",
    date: "2026-04-12",
    author: "Iris Holm",
    tags: ["poetry", "night"],
  },
  {
    title: "本棚の整理",
    date: "2026-03-30",
    author: "Maya Tanaka",
    tags: ["journal"],
  },
]

const meta = {
  title: "UI/Table",
  component: Table,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleList: Story = {
  render: () => (
    <div className="w-[720px] rounded-md border border-border/60 bg-card/40 p-4">
      <Table>
        <TableCaption>最近公開された読書ノートの一覧</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.title}>
              <TableCell className="font-medium text-foreground">
                {article.title}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {article.date}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {article.author}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <div className="w-[560px] rounded-md border border-border/60 bg-card/40 p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="w-[120px]">Date</TableHead>
            <TableHead className="w-[140px]">Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.slice(0, 3).map((article) => (
            <TableRow key={article.title}>
              <TableCell className="font-medium text-foreground">
                {article.title}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {article.date}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {article.author}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
