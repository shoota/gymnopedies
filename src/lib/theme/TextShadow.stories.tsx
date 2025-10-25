import type { Meta, StoryObj } from "@storybook/react-vite"

const TextShadowShowcase = () => (
  <div style={{ padding: "var(--spacing-lg)" }}>
    <h2>Text Shadow Design Tokens</h2>
    
    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Text Shadow Types</h3>
      
      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <h4>Light Background</h4>
        <div style={{ 
          padding: "var(--spacing-lg)",
          backgroundColor: "#f8f9fa",
          borderRadius: "var(--border-radius-lg)",
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "var(--spacing-md)" 
        }}>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-soft)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-base)"
            }}>
              Soft Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--text-shadow-soft</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>柔らかなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-strong)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-base)"
            }}>
              Strong Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--text-shadow-strong</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>はっきりしたテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-glow)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-base)"
            }}>
              Glow Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--text-shadow-glow</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>光るようなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-light-blur)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-base)"
            }}>
              Light Blur
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--text-shadow-light-blur</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>明るく滲む文字影</div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <h4>Main Color Background</h4>
        <div style={{ 
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-main)",
          borderRadius: "var(--border-radius-lg)",
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "var(--spacing-md)" 
        }}>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-soft)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Soft Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-soft</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>柔らかなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-strong)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Strong Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-strong</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>はっきりしたテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-glow)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Glow Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-glow</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>光るようなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-light-blur)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Light Blur
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-light-blur</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>明るく滲む文字影</div>
          </div>
        </div>
      </div>

      <div>
        <h4>Dark Background</h4>
        <div style={{ 
          padding: "var(--spacing-lg)",
          backgroundColor: "#1a1a1a",
          borderRadius: "var(--border-radius-lg)",
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "var(--spacing-md)" 
        }}>
          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-soft)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Soft Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-soft</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>柔らかなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-strong)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Strong Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-strong</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>はっきりしたテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-glow)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Glow Shadow
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-glow</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>光るようなテキスト影</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h5 style={{ 
              margin: "0 0 var(--spacing-xs) 0",
              textShadow: "var(--text-shadow-light-blur)",
              fontSize: "var(--font-size-xl)",
              color: "white"
            }}>
              Light Blur
            </h5>
            <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)", color: "white" }}>--text-shadow-light-blur</div>
            <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7, color: "white" }}>明るく滲む文字影</div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Text Shadow Usage Examples</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
        
        <div style={{
          padding: "var(--spacing-xl)",
          backgroundColor: "var(--color-tone)",
          borderRadius: "var(--border-radius-outer)",
          textAlign: "center"
        }}>
          <h4 style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-soft)",
            fontSize: "var(--font-size-3xl)"
          }}>
            Elegant Heading
          </h4>
          <p style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-soft)",
            fontSize: "var(--font-size-lg)"
          }}>
            This section uses soft text shadow to create subtle depth and improve readability.
          </p>
        </div>

        <div style={{
          padding: "var(--spacing-xl)",
          backgroundColor: "var(--color-main)",
          color: "white",
          borderRadius: "var(--border-radius-outer)",
          textAlign: "center"
        }}>
          <h4 style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-light-blur)",
            fontSize: "var(--font-size-3xl)",
            color: "var(--color-link)"
          }}>
            Glowing Title
          </h4>
          <p style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-strong)",
            fontSize: "var(--font-size-lg)"
          }}>
            This hero section combines light blur shadow for the title and strong shadow for the body text.
          </p>
        </div>

        <div style={{
          padding: "var(--spacing-xl)",
          backgroundColor: "#1a1a1a",
          color: "white",
          borderRadius: "var(--border-radius-outer)",
          textAlign: "center"
        }}>
          <h4 style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-glow)",
            fontSize: "var(--font-size-3xl)",
            color: "var(--color-link)"
          }}>
            Dramatic Effect
          </h4>
          <p style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-light-blur)",
            fontSize: "var(--font-size-lg)"
          }}>
            Dark backgrounds work great with glow and light blur shadows for creating dramatic lighting effects.
          </p>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Typography Hierarchy with Shadows</h3>
      <div style={{ 
        padding: "var(--spacing-xl)",
        backgroundColor: "var(--color-tone)",
        borderRadius: "var(--border-radius-lg)"
      }}>
        <h1 style={{ 
          margin: "0 0 var(--spacing-md) 0",
          textShadow: "var(--text-shadow-strong)",
          fontSize: "var(--font-size-5xl)"
        }}>
          Main Headline
        </h1>
        <h2 style={{ 
          margin: "0 0 var(--spacing-md) 0",
          textShadow: "var(--text-shadow-soft)",
          fontSize: "var(--font-size-4xl)"
        }}>
          Secondary Heading
        </h2>
        <h3 style={{ 
          margin: "0 0 var(--spacing-md) 0",
          textShadow: "var(--text-shadow-soft)",
          fontSize: "var(--font-size-3xl)"
        }}>
          Tertiary Heading
        </h3>
        <p style={{ 
          margin: "0 0 var(--spacing-md) 0",
          fontSize: "var(--font-size-lg)",
          lineHeight: "var(--line-height-relaxed)"
        }}>
          Body text typically doesn't need text shadow, but headings can benefit from subtle shadows to create visual hierarchy and improve legibility.
        </p>
        <p style={{ 
          margin: "0",
          fontSize: "var(--font-size-sm)",
          opacity: 0.7
        }}>
          Small text and captions work best without shadows to maintain clarity at smaller sizes.
        </p>
      </div>
    </section>

    <section>
      <h3>Interactive Elements with Text Shadow</h3>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "var(--spacing-lg)" 
      }}>
        <button style={{
          padding: "var(--spacing-md) var(--spacing-lg)",
          backgroundColor: "var(--color-main)",
          color: "white",
          border: "none",
          borderRadius: "var(--border-radius-inner)",
          fontSize: "var(--font-size-lg)",
          fontWeight: "bold",
          textShadow: "var(--text-shadow-strong)",
          cursor: "pointer"
        }}>
          Button with Strong Shadow
        </button>

        <button style={{
          padding: "var(--spacing-md) var(--spacing-lg)",
          backgroundColor: "var(--color-link)",
          color: "var(--color-base)",
          border: "none",
          borderRadius: "var(--border-radius-inner)",
          fontSize: "var(--font-size-lg)",
          fontWeight: "bold",
          textShadow: "var(--text-shadow-glow)",
          cursor: "pointer"
        }}>
          Button with Glow Shadow
        </button>

        <div style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-dark)",
          color: "white",
          borderRadius: "var(--border-radius-md)",
          textAlign: "center"
        }}>
          <div style={{ 
            fontSize: "var(--font-size-xl)",
            fontWeight: "bold",
            textShadow: "var(--text-shadow-light-blur)",
            marginBottom: "var(--spacing-xs)"
          }}>
            Card Title
          </div>
          <div style={{ fontSize: "var(--font-size-sm)" }}>
            Card with light blur text shadow
          </div>
        </div>

        <div style={{
          padding: "var(--spacing-md)",
          backgroundColor: "white",
          borderRadius: "var(--border-radius-md)",
          textAlign: "center",
          border: "1px solid var(--color-light)"
        }}>
          <div style={{ 
            fontSize: "var(--font-size-xl)",
            fontWeight: "bold",
            textShadow: "var(--text-shadow-soft)",
            marginBottom: "var(--spacing-xs)",
            color: "var(--color-base)"
          }}>
            Clean Card
          </div>
          <div style={{ fontSize: "var(--font-size-sm)", color: "var(--color-default)" }}>
            Card with soft text shadow
          </div>
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof TextShadowShowcase> = {
  title: "theme/TextShadow",
  component: TextShadowShowcase,
}

export default meta

type Story = StoryObj<typeof TextShadowShowcase>

export const Default: Story = {}