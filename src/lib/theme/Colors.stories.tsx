import type { Meta, StoryObj } from "@storybook/react-vite"

const ColorShowcase = () => (
  <div style={{ padding: "var(--spacing-lg)" }}>
    <h2>Color Design Tokens</h2>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Color Palette</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--spacing-md)",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--color-base)",
            color: "white",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Base</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-base</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#333333</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Main</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-main</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#35434c</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-default)",
            color: "white",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Default</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-default</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#999999</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-light)",
            color: "var(--color-base)",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
            border: "1px solid var(--color-default)",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Light</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-light</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#d6d6d6</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-dark)",
            color: "white",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Dark</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-dark</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#04252b</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-tone)",
            color: "var(--color-base)",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
            border: "1px solid var(--color-default)",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Tone</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-tone</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#cfd8de</div>
        </div>

        <div
          style={{
            backgroundColor: "var(--color-link)",
            color: "var(--color-base)",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Link</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>--color-link</div>
          <div style={{ fontSize: "var(--font-size-xs)" }}>#d5ca86</div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Color Usage Examples</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-main)",
            color: "white",
            borderRadius: "var(--border-radius-lg)",
          }}
        >
          <h4 style={{ margin: "0 0 var(--spacing-xs) 0", color: "var(--color-link)" }}>
            Main Color Background
          </h4>
          <p style={{ margin: 0 }}>
            This section uses the main color as background with link color for
            headings.
          </p>
        </div>

        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-tone)",
            color: "var(--color-base)",
            borderRadius: "var(--border-radius-lg)",
          }}
        >
          <h4 style={{ margin: "0 0 var(--spacing-xs) 0" }}>Tone Color Background</h4>
          <p style={{ margin: "0 0 var(--spacing-xs) 0" }}>
            This section uses the tone color as background.
          </p>
          <a href="#" style={{ color: "var(--color-link)" }}>
            This is a link in tone background
          </a>
        </div>

        <div
          style={{
            padding: "var(--spacing-md)",
            border: "1px solid var(--color-light)",
            borderRadius: "var(--border-radius-lg)",
          }}
        >
          <h4 style={{ margin: "0 0 var(--spacing-xs) 0", color: "var(--color-main)" }}>
            Bordered Section
          </h4>
          <p style={{ margin: "0 0 var(--spacing-xs) 0", color: "var(--color-default)" }}>
            This section uses default color for text with main color heading.
          </p>
          <a href="#" style={{ color: "var(--color-link)" }}>
            Link color example
          </a>
        </div>
      </div>
    </section>

    <section>
      <h3>RGB Color Variables</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
        <div
          style={{
            padding: "var(--spacing-sm)",
            backgroundColor: `rgba(var(--color-default-rgb), 0.1)`,
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          Default RGB with 10% opacity: rgba(var(--color-default-rgb), 0.1)
        </div>
        <div
          style={{
            padding: "var(--spacing-sm)",
            backgroundColor: `rgba(var(--color-dark-rgb), 0.1)`,
            border: "1px solid var(--color-dark)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          Dark RGB with 10% opacity: rgba(var(--color-dark-rgb), 0.1)
        </div>
        <div
          style={{
            padding: "var(--spacing-sm)",
            backgroundColor: `rgba(var(--color-light-rgb), 0.5)`,
            border: "1px solid var(--color-light)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          Light RGB with 50% opacity: rgba(var(--color-light-rgb), 0.5)
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof ColorShowcase> = {
  title: "theme/Colors",
  component: ColorShowcase,
}

export default meta

type Story = StoryObj<typeof ColorShowcase>

export const Default: Story = {}
