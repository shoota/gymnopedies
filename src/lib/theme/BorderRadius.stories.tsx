import type { Meta, StoryObj } from "@storybook/react-vite"

const BorderRadiusShowcase = () => (
  <div style={{ padding: "20px" }}>
    <h2>Border Radius Design Tokens</h2>

    <section style={{ marginBottom: "40px" }}>
      <h3>Primitive Border Radius Scale</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-none)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>None</div>
          <div style={{ fontSize: "12px" }}>--border-radius-none</div>
          <div style={{ fontSize: "12px" }}>0</div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-sm)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Small</div>
          <div style={{ fontSize: "12px" }}>--border-radius-sm</div>
          <div style={{ fontSize: "12px" }}>2px</div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-md)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Medium</div>
          <div style={{ fontSize: "12px" }}>--border-radius-md</div>
          <div style={{ fontSize: "12px" }}>4px</div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-lg)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Large</div>
          <div style={{ fontSize: "12px" }}>--border-radius-lg</div>
          <div style={{ fontSize: "12px" }}>8px</div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-xl)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Extra Large
          </div>
          <div style={{ fontSize: "12px" }}>--border-radius-xl</div>
          <div style={{ fontSize: "12px" }}>12px</div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-2xl)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            2X Large
          </div>
          <div style={{ fontSize: "12px" }}>--border-radius-2xl</div>
          <div style={{ fontSize: "12px" }}>16px</div>
        </div>

        <div
          style={{
            width: "120px",
            height: "120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-full)",
            border: "2px solid var(--color-main)",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Full</div>
          <div style={{ fontSize: "12px" }}>--border-radius-full</div>
          <div style={{ fontSize: "12px" }}>50%</div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "40px" }}>
      <h3>Semantic Border Radius Tokens</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "24px",
            backgroundColor: "var(--color-main)",
            color: "white",
            borderRadius: "var(--border-radius-outer)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Outer</div>
          <div style={{ fontSize: "14px", marginBottom: "4px" }}>
            --border-radius-outer
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Large elements, card containers
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Maps to: var(--border-radius-lg) = 8px
          </div>
        </div>

        <div
          style={{
            padding: "24px",
            backgroundColor: "var(--color-default)",
            color: "white",
            borderRadius: "var(--border-radius-inner)",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Inner</div>
          <div style={{ fontSize: "14px", marginBottom: "4px" }}>
            --border-radius-inner
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Small elements, buttons, inputs
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Maps to: var(--border-radius-sm) = 2px
          </div>
        </div>

        <div
          style={{
            width: "140px",
            height: "140px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--color-link)",
            color: "var(--color-base)",
            borderRadius: "var(--border-radius-full-semantic)",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Full Semantic
          </div>
          <div style={{ fontSize: "14px", marginBottom: "4px" }}>
            --border-radius-full-semantic
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Circular elements, avatars
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            Maps to: var(--border-radius-full) = 50%
          </div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "40px" }}>
      <h3>Usage Examples</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            padding: "var(--spacing-lg)",
            backgroundColor: "var(--color-tone)",
            borderRadius: "var(--border-radius-outer)",
            border: "1px solid var(--color-light)",
          }}
        >
          <h4 style={{ margin: "0 0 16px 0" }}>
            Card Container (Outer Radius)
          </h4>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "var(--color-main)",
                color: "white",
                border: "none",
                borderRadius: "var(--border-radius-inner)",
                cursor: "pointer",
              }}
            >
              Button (Inner Radius)
            </button>
            <input
              type="text"
              placeholder="Input field"
              style={{
                padding: "8px 12px",
                border: "1px solid var(--color-default)",
                borderRadius: "var(--border-radius-inner)",
                backgroundColor: "white",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "var(--color-link)",
                borderRadius: "var(--border-radius-full-semantic)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-base)",
                fontWeight: "bold",
              }}
            >
              A
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "16px",
              backgroundColor: "var(--color-main)",
              color: "white",
              borderRadius: "var(--border-radius-inner)",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Tag
            <br />
            (Inner)
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: "var(--color-default)",
              color: "white",
              borderRadius: "var(--border-radius-md)",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Card
            <br />
            (Medium)
          </div>
          <div
            style={{
              padding: "24px",
              backgroundColor: "var(--color-dark)",
              color: "white",
              borderRadius: "var(--border-radius-outer)",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Panel
            <br />
            (Outer)
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Different Border Radius on Same Element</h3>
      <div
        style={{ display: "flex", gap: "var(--spacing-lg)", flexWrap: "wrap" }}
      >
        <div
          style={{
            width: "120px",
            height: "80px",
            backgroundColor: "var(--color-main)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "var(--border-radius-2xl)",
            borderTopRightRadius: "var(--border-radius-sm)",
            borderBottomLeftRadius: "var(--border-radius-sm)",
            borderBottomRightRadius: "var(--border-radius-2xl)",
          }}
        >
          Mixed
        </div>
        <div
          style={{
            width: "120px",
            height: "80px",
            backgroundColor: "var(--color-default)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "var(--border-radius-outer)",
            borderTopRightRadius: "var(--border-radius-outer)",
            borderBottomLeftRadius: "var(--border-radius-none)",
            borderBottomRightRadius: "var(--border-radius-none)",
          }}
        >
          Top Only
        </div>
        <div
          style={{
            width: "120px",
            height: "80px",
            backgroundColor: "var(--color-link)",
            color: "var(--color-base)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "var(--border-radius-none)",
            borderTopRightRadius: "var(--border-radius-none)",
            borderBottomLeftRadius: "var(--border-radius-outer)",
            borderBottomRightRadius: "var(--border-radius-outer)",
          }}
        >
          Bottom Only
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof BorderRadiusShowcase> = {
  title: "theme/BorderRadius",
  component: BorderRadiusShowcase,
}

export default meta

type Story = StoryObj<typeof BorderRadiusShowcase>

export const Default: Story = {}
