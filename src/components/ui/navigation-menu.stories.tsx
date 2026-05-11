import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const meta = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>カテゴリー</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[380px] gap-2 p-3 md:grid-cols-2">
              <li>
                <NavigationMenuLink className="font-medium">
                  読書ノート
                  <span className="text-xs text-muted-foreground">
                    本のページから拾った断片
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="font-medium">
                  フィールド
                  <span className="text-xs text-muted-foreground">
                    旅と歩行の記録
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="font-medium">
                  音楽
                  <span className="text-xs text-muted-foreground">
                    レコードと静かな夜
                  </span>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="font-medium">
                  エッセイ
                  <span className="text-xs text-muted-foreground">
                    日々の周縁から
                  </span>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>アーカイブ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] gap-1 p-3">
              <li>
                <NavigationMenuLink>2026年 春</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>2025年 冬</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>2025年 秋</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>すべての記事を見る</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>目次</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[260px] gap-1 p-3">
              <li>
                <NavigationMenuLink>序章 — 沈黙の前に</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>I. 朝の頁</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>II. 余白について</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>III. 夕暮れの読書</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
            購読
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
