import type { Meta, StoryObj } from "@storybook/react-vite"

import { Content } from "@/components/blog/content"

const meta = {
  title: "Blog/Content",
  component: Content,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-[640px]">
      <Content>
        <p>
          五月の朝、図書室の窓辺には淡い光がたまる。誰もいない室内で、私はサティの楽譜をめくり、
          ジムノペディの最初の一音を口の中で鳴らしてみる。
        </p>
      </Content>
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="max-w-[640px]">
      <Content>
        <p>
          午後の散歩のあと、机に戻って書きかけのエッセイを読み返した。文章は、写真と同じく
          時間の手触りを残しているように思う。
        </p>
        <img
          src="/image/example.jpg"
          alt="木漏れ日の差すデスク"
        />
        <p>
          数年経ってからふと読み返したときに、思いがけない場所で立ち止まるような、そんな文章を書きたい。
        </p>
      </Content>
    </div>
  ),
}

export const Adjacent: Story = {
  render: () => (
    <div className="max-w-[640px]">
      <Content>
        <p>
          一つ目のセクション。Content が連続したときは、隣接セレクタによって自動的に上マージンが入る。
        </p>
      </Content>
      <Content>
        <p>
          二つ目のセクション。`[&_+_&]:mt-4` が効いて、空白が均等に保たれているはず。
        </p>
      </Content>
      <Content>
        <p>三つ目のセクション。読み物としてのリズムを崩さない程度の間隔。</p>
      </Content>
    </div>
  ),
}
