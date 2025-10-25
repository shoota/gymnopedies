import type { Meta, StoryObj } from "@storybook/react-vite"

const TypographyShowcase = () => (
  <div style={{ padding: "var(--spacing-lg)" }}>
    <h2>Typography Design Tokens</h2>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Font Sizes</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
        <div style={{ fontSize: "var(--font-size-xs)" }}>
          xs (12px) - Extra Small Text
        </div>
        <div style={{ fontSize: "var(--font-size-sm)" }}>
          sm (14px) - Small Text
        </div>
        <div style={{ fontSize: "var(--font-size-base)" }}>
          base (16px) - Base Text
        </div>
        <div style={{ fontSize: "var(--font-size-lg)" }}>
          lg (18px) - Large Text
        </div>
        <div style={{ fontSize: "var(--font-size-xl)" }}>
          xl (20px) - Extra Large Text
        </div>
        <div style={{ fontSize: "var(--font-size-2xl)" }}>
          2xl (22px) - 2X Large Text
        </div>
        <div style={{ fontSize: "var(--font-size-3xl)" }}>
          3xl (24px) - 3X Large Text
        </div>
        <div style={{ fontSize: "var(--font-size-4xl)" }}>
          4xl (26px) - 4X Large Text
        </div>
        <div style={{ fontSize: "var(--font-size-5xl)" }}>
          5xl (28px) - 5X Large Text
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Font Families</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
        <div style={{ fontFamily: "var(--font-family-serif)" }}>
          Serif Font Family - The quick brown fox jumps over the lazy dog
        </div>
        <div style={{ fontFamily: "var(--font-family-mono)" }}>
          Mono Font Family - The quick brown fox jumps over the lazy dog
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Font Weights</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
        <div style={{ fontWeight: "var(--font-weight-normal)" }}>
          Normal Weight Text
        </div>
        <div style={{ fontWeight: "var(--font-weight-bold)" }}>
          Bold Weight Text
        </div>
        <div style={{ fontWeight: "var(--font-weight-bolder)" }}>
          Bolder Weight Text
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Line Heights</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        <div
          style={{
            lineHeight: "var(--line-height-tight)",
            border: "1px solid var(--color-light)",
            padding: "var(--spacing-xs)",
          }}
        >
          <strong>Tight (1.2):</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          style={{
            lineHeight: "var(--line-height-base)",
            border: "1px solid var(--color-light)",
            padding: "var(--spacing-xs)",
          }}
        >
          <strong>Base (1.3):</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          style={{
            lineHeight: "var(--line-height-relaxed)",
            border: "1px solid var(--color-light)",
            padding: "var(--spacing-xs)",
          }}
        >
          <strong>Relaxed (1.5):</strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Letter Spacing</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
        <div style={{ letterSpacing: "var(--letter-spacing-tight)" }}>
          Tight Letter Spacing (-0.025em)
        </div>
        <div style={{ letterSpacing: "var(--letter-spacing-base)" }}>
          Base Letter Spacing (0)
        </div>
        <div style={{ letterSpacing: "var(--letter-spacing-wide)" }}>
          Wide Letter Spacing (0.5px)
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof TypographyShowcase> = {
  title: "theme/Typography",
  component: TypographyShowcase,
}

export default meta

type Story = StoryObj<typeof TypographyShowcase>

export const Default: Story = {}
