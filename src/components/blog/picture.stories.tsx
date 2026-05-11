import type { Meta, StoryObj } from "@storybook/react-vite"

import { Picture } from "@/components/blog/picture"

const meta = {
  title: "Blog/Picture",
  component: Picture,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Picture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[420px]">
      <Picture>
        <Picture.Image
          src="/image/example.jpg"
          alt="窓辺に置かれた湯気の立つカップ"
        />
      </Picture>
    </div>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <div className="w-[420px]">
      <Picture>
        <Picture.Image
          src="/image/example.jpg"
          alt="雨上がりの石畳"
        />
        <Picture.Caption>
          Photo by{" "}
          <a
            href="https://unsplash.com/@shoota"
            target="_blank"
            rel="noreferrer"
          >
            shoota
          </a>
        </Picture.Caption>
      </Picture>
    </div>
  ),
}

export const WithTransition: Story = {
  render: () => (
    <div className="w-[420px]">
      <Picture>
        <Picture.Image
          src="/image/example.jpg"
          alt="霧の中の桟橋"
          transition
          tabIndex={0}
        />
        <Picture.Caption>hover / focus で色が戻る</Picture.Caption>
      </Picture>
    </div>
  ),
}

export const CustomObjectPosition: Story = {
  render: () => (
    <div className="h-[240px] w-[420px]">
      <Picture className="h-full">
        <Picture.Image
          src="/image/example.jpg"
          alt="海辺の灯台"
          objectPosition="top"
          className="h-full"
        />
        <Picture.Caption>object-position: top</Picture.Caption>
      </Picture>
    </div>
  ),
}
