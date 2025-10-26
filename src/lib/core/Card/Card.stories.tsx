import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card } from "./index"

const meta = {
  title: "Core/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to understanding and using React Hooks in modern applications. Learn about useState, useEffect, and custom hooks.",
    image: {
      src: "/image/example.jpg",
      alt: "React Hooks tutorial illustration",
      caption: "React Hooks Guide",
    },
  },
}

export const WithoutImage: Story = {
  args: {
    title: "JavaScript Best Practices",
    description:
      "Essential JavaScript practices every developer should know to write clean, maintainable code.",
  },
}

export const LongContent: Story = {
  args: {
    title: "Advanced TypeScript Techniques for Better Code Quality",
    description:
      "Explore advanced TypeScript features including conditional types, mapped types, and template literal types to enhance your development workflow and catch errors at compile time.",
    content:
      "This guide covers practical examples and real-world applications that you can implement immediately in your projects.",
    image: {
      src: "/image/example.jpg",
      alt: "TypeScript advanced techniques",
      caption: "Advanced TS",
    },
  },
}

export const SmallSize: Story = {
  args: {
    title: "Quick Tips",
    description: "Short and useful development tips.",
    size: "xs",
    image: {
      src: "/image/example.jpg",
      alt: "Quick tips",
      caption: "Tips",
    },
  },
}

export const LargeSize: Story = {
  args: {
    title: "Complete Guide to Modern Web Development",
    description:
      "An extensive guide covering everything from HTML basics to advanced React patterns, including best practices and performance optimization techniques.",
    size: "lg",
    image: {
      src: "/image/example.jpg",
      alt: "Web development guide",
      caption: "Web Dev Guide",
    },
  },
}
