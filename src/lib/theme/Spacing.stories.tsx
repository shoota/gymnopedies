import type { Meta, StoryObj } from "@storybook/react-vite"

const SpacingShowcase = () => (
  <div style={{ padding: "var(--spacing-lg)" }}>
    <h2>Spacing Design Tokens</h2>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Spacing Scale</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-xs)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>xs:</strong> var(--spacing-xs) = 8px
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-sm)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>sm:</strong> var(--spacing-sm) = 12px
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-md)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>md:</strong> var(--spacing-md) = 24px
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-lg)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>lg:</strong> var(--spacing-lg) = 32px
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-xl)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>xl:</strong> var(--spacing-xl) = 40px
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-md)" }}>
          <div
            style={{
              width: "var(--spacing-2xl)",
              height: "var(--spacing-xl)",
              backgroundColor: "var(--color-main)",
              borderRadius: "var(--border-radius-sm)",
            }}
          ></div>
          <span>
            <strong>2xl:</strong> var(--spacing-2xl) = 48px
          </span>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Padding Examples</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--spacing-md)",
        }}
      >
        <div
          style={{
            padding: "var(--spacing-xs)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: xs (8px)
          </div>
        </div>

        <div
          style={{
            padding: "var(--spacing-sm)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: sm (12px)
          </div>
        </div>

        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: md (24px)
          </div>
        </div>

        <div
          style={{
            padding: "var(--spacing-lg)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: lg (32px)
          </div>
        </div>

        <div
          style={{
            padding: "var(--spacing-xl)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: xl (40px)
          </div>
        </div>

        <div
          style={{
            padding: "var(--spacing-2xl)",
            backgroundColor: "var(--color-tone)",
            border: "1px solid var(--color-default)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--color-main)",
              color: "white",
              padding: "var(--spacing-xs)",
              borderRadius: "var(--border-radius-sm)",
            }}
          >
            padding: 2xl (48px)
          </div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Margin Examples</h3>
      <div
        style={{
          backgroundColor: "var(--color-light)",
          padding: "var(--spacing-md)",
          borderRadius: "var(--border-radius-lg)",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-xs)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: xs (8px)
        </div>
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-sm)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: sm (12px)
        </div>
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-md)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: md (24px)
        </div>
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-lg)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: lg (32px)
        </div>
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-xl)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: xl (40px)
        </div>
        <div
          style={{
            backgroundColor: "var(--color-main)",
            color: "white",
            padding: "var(--spacing-xs)",
            margin: "var(--spacing-2xl)",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          margin: 2xl (48px)
        </div>
      </div>
    </section>

    <section>
      <h3>Gap Examples</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        <div>
          <h4>Flex Gap: xs (8px)</h4>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-xs)",
              padding: "var(--spacing-xs)",
              backgroundColor: "var(--color-tone)",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 1
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 2
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 3
            </div>
          </div>
        </div>

        <div>
          <h4>Flex Gap: md (24px)</h4>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-md)",
              padding: "var(--spacing-xs)",
              backgroundColor: "var(--color-tone)",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 1
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 2
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Item 3
            </div>
          </div>
        </div>

        <div>
          <h4>Grid Gap: lg (32px)</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "var(--spacing-lg)",
              padding: "var(--spacing-xs)",
              backgroundColor: "var(--color-tone)",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 1
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 2
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 3
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 4
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 5
            </div>
            <div
              style={{
                backgroundColor: "var(--color-main)",
                color: "white",
                padding: "var(--spacing-xs)",
                borderRadius: "var(--border-radius-sm)",
              }}
            >
              Grid 6
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof SpacingShowcase> = {
  title: "theme/Spacing",
  component: SpacingShowcase,
}

export default meta

type Story = StoryObj<typeof SpacingShowcase>

export const Default: Story = {}
