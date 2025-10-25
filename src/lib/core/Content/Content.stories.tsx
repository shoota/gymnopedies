import type { Meta, StoryObj } from "@storybook/react-vite"
import { Content } from "."

type Story = StoryObj<typeof meta>
const Child = () => (
  <div style={{ maxWidth: "480px" }}>
    <h1>This is children of Content</h1>
    <p>
      Hello everyone. A gymnopedies use in{" "}
      <a href="https://shoota.work">shoota.work</a>.
    </p>
    <img src="/image/example.jpg" />
  </div>
)

const meta = {
  title: "core/Content",
  component: Content,
  args: {
    children: <Child />,
  },
} satisfies Meta<typeof Content>

export default meta

export const Default: Story = {}
