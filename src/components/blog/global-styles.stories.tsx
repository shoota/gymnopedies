import type { Meta, StoryObj } from "@storybook/react-vite"

import { GlobalStyles } from "@/components/blog/global-styles"

const meta = {
  title: "Blog/GlobalStyles",
  component: GlobalStyles,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof GlobalStyles>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Shows raw HTML elements styled by <GlobalStyles />.
 *
 * Each element is labelled with its own tag name so you can immediately tell
 * which rule is being demonstrated. Matches the legacy `theme/global.stories.tsx`
 * layout from v1.
 */
export const Default: Story = {
  render: () => (
    <div>
      <GlobalStyles />
      <h1>
        Heading1 <a href="#">link</a>
      </h1>
      <h2>
        Heading2 <a href="#">link</a>
      </h2>
      <h3>
        Heading3 <a href="#">link</a>
      </h3>
      <h4>
        Heading4 <a href="#">link</a>
      </h4>
      <h5>
        Heading5 <a href="#">link</a>
      </h5>
      <h6>
        Heading6 <a href="#">link</a>
      </h6>
      <p>
        Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <b>Bold</b>
      <br />
      <strong>Strong</strong>
      <br />
      <i>Italic</i>
      <br />
      <small>small</small>
      <br />
      <a href="/">this is link</a>
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
      <hr />
      <pre>Here is inner of pre tag.</pre>
      <code>Here is inner of code tag.</code>
      <hr />
      <blockquote>
        <p>Here is inner of blockquote tag.</p>
      </blockquote>
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
      <fieldset>
        <button type="button">button</button>
        <button type="button" disabled>
          disabled button
        </button>
      </fieldset>
      <hr />
      <div style={{ maxWidth: "480px" }}>
        <img src="/image/example.jpg" alt="example" />
      </div>
    </div>
  ),
}

/**
 * The same markup WITHOUT <GlobalStyles /> mounted — only Tailwind v4's
 * preflight reset is in effect. Compare side-by-side to see what the
 * component restores.
 */
export const WithoutGlobalStyles: Story = {
  render: () => (
    <div>
      <h1>
        Heading1 <a href="#">link</a>
      </h1>
      <h2>
        Heading2 <a href="#">link</a>
      </h2>
      <h3>
        Heading3 <a href="#">link</a>
      </h3>
      <h4>
        Heading4 <a href="#">link</a>
      </h4>
      <h5>
        Heading5 <a href="#">link</a>
      </h5>
      <h6>
        Heading6 <a href="#">link</a>
      </h6>
      <p>Paragraph: Lorem ipsum dolor sit amet.</p>
      <ul>
        <li>unordered list</li>
        <li>unordered list</li>
      </ul>
      <ol>
        <li>ordered list</li>
        <li>ordered list</li>
      </ol>
      <blockquote>
        <p>blockquote</p>
      </blockquote>
      <pre>pre</pre>
      <code>code</code>
    </div>
  ),
}
