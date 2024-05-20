import type { StoryObj } from "@storybook/react"

type Story = StoryObj<typeof meta>

const Component = () => (
  <div>
    <h1>
      Heading1 <a>link</a>
    </h1>
    <h2>
      Heading2 <a>link</a>
    </h2>
    <h3>
      Heading3 <a>link</a>
    </h3>
    <h4>
      Heading4 <a>link</a>
    </h4>
    <h5>
      Heading5 <a>link</a>
    </h5>
    <h6>
      Heading6 <a>link</a>
    </h6>
    <p>
      Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <b>Bold</b>
    <br />
    <strong>Strong</strong>
    <br />
    <i>Italic</i>
    <br />
    <a>this is link</a>
    <br />
    <hr />
    <ul>
      <li>unordered list</li>
      <li>unordered list</li>
      <li>unordered list</li>
    </ul>
    <ol>
      <li>ordered list</li>
      <li>ordered list</li>
      <li>ordered list</li>
    </ol>
    {/* pretter-ignore */}
    <hr />
    <pre>Here is inner of pre tag.</pre>
    <code>Here is inner of code tag.</code>
    <hr />
    <table>
      <thead>
        <tr>
          <th align="left">the first table header</th>
          <th align="center">the second table header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">the first column of first row</td>
          <td align="center">the second column of first row</td>
        </tr>
        <tr>
          <td align="left">the first column of second row</td>
          <td align="center">the second column of second row</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div style={{ maxWidth: "480px" }}>
      <img src="/image/example.jpg" />
    </div>
  </div>
)

const meta = {
  title: "globals",
  component: Component,
}

export default meta

export const Default: Story = {}
