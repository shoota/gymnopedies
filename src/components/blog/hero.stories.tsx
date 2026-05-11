import type { Meta, StoryObj } from "@storybook/react-vite"

import { Hero } from "@/components/blog/hero"

const meta = {
  title: "Blog/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

const coverImage = "/image/example.jpg"

export const Default: Story = {
  args: {
    cover: "静かな朝の読書",
    size: "md",
    imgProps: {
      src: coverImage,
      alt: "曇り空と古い書斎の窓辺",
    },
  },
}

export const Small: Story = {
  args: {
    cover: "Essay",
    size: "sm",
    imgProps: {
      src: "/image/example.jpg",
      alt: "霧のかかった早朝の街並み",
    },
  },
}

export const Large: Story = {
  args: {
    cover: "Gymnopédies — 三つの夢想",
    size: "lg",
    imgProps: {
      src: "/image/example.jpg",
      alt: "古いピアノと譜面",
    },
  },
}

export const CoverNearTop: Story = {
  args: {
    cover: "晩夏、図書室にて",
    size: "md",
    coverTop: 20,
    imgProps: {
      src: "/image/example.jpg",
      alt: "夕暮れの図書室",
    },
  },
}
