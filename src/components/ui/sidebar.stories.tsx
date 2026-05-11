import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BookmarkIcon,
  ClockIcon,
  FeatherIcon,
  HomeIcon,
  RssIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <FeatherIcon className="size-4 text-primary" />
            <span className="font-serif text-base">gymnopedies</span>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>メイン</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <HomeIcon />
                    <span>ホーム</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SearchIcon />
                    <span>検索</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BookmarkIcon />
                    <span>ブックマーク</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ClockIcon />
                    <span>履歴</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>カテゴリー</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>読書ノート</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton isActive>
                        静かな朝の読書
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        余白の手帖から
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>フィールド</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <span>音楽</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <RssIcon />
                <span>RSS を購読</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SettingsIcon />
                <span>設定</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
          <span className="font-serif text-sm text-muted-foreground">
            静かな朝の読書 — Reading Notes
          </span>
        </header>
        <div className="p-6">
          <article className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed">
            <h1 className="font-serif text-2xl">静かな朝の読書</h1>
            <p className="text-muted-foreground">
              コーヒーの湯気越しに本のページをめくる、その小さな所作のなかに、一日の輪郭が静かに立ち上がる。
            </p>
            <p className="text-muted-foreground">
              まだ世界が言葉になりきらないこの時間、頁の上でだけ意味は確かさを取り戻す。
            </p>
          </article>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
