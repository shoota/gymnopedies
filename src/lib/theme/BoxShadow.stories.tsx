import type { Meta, StoryObj } from "@storybook/react-vite"

const BoxShadowShowcase = () => (
  <div style={{ padding: "var(--spacing-lg)" }}>
    <h2>Shadow Design Tokens</h2>
    
    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Box Shadow Types</h3>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "var(--spacing-lg)" 
      }}>
        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-tone)",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-neutral)",
          textAlign: "center"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Neutral</div>
          <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--box-shadow-neutral</div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>汎用的な中間色の影</div>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-main)",
          color: "white",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-soft-glow)",
          textAlign: "center"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Soft Glow</div>
          <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--box-shadow-soft-glow</div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>柔らかな間接照明</div>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-dark)",
          color: "white",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-strong-glow)",
          textAlign: "center"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Strong Glow</div>
          <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--box-shadow-strong-glow</div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>強い光で浮き上がる</div>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "white",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-light-soft)",
          textAlign: "center"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Light Soft</div>
          <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--box-shadow-light-soft</div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>うっすらとした影</div>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-light)",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-light-sharp)",
          textAlign: "center"
        }}>
          <div style={{ fontWeight: "bold", marginBottom: "var(--spacing-xs)" }}>Light Sharp</div>
          <div style={{ fontSize: "var(--font-size-xs)", marginBottom: "var(--spacing-xs)" }}>--box-shadow-light-sharp</div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>くっきりとした影</div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>Background Comparison</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
        
        <div>
          <h4>Light Background Shadows</h4>
          <div style={{ 
            padding: "var(--spacing-lg)",
            backgroundColor: "#f8f9fa",
            borderRadius: "var(--border-radius-lg)",
            display: "flex",
            gap: "var(--spacing-md)",
            flexWrap: "wrap"
          }}>
            <div style={{
              padding: "var(--spacing-md)",
              backgroundColor: "white",
              borderRadius: "var(--border-radius-md)",
              boxShadow: "var(--box-shadow-neutral)",
              textAlign: "center",
              minWidth: "120px"
            }}>
              <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "bold" }}>Neutral</div>
            </div>
            
            <div style={{
              padding: "var(--spacing-md)",
              backgroundColor: "white",
              borderRadius: "var(--border-radius-md)",
              boxShadow: "var(--box-shadow-light-soft)",
              textAlign: "center",
              minWidth: "120px"
            }}>
              <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "bold" }}>Light Soft</div>
            </div>
            
            <div style={{
              padding: "var(--spacing-md)",
              backgroundColor: "white",
              borderRadius: "var(--border-radius-md)",
              boxShadow: "var(--box-shadow-light-sharp)",
              textAlign: "center",
              minWidth: "120px"
            }}>
              <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "bold" }}>Light Sharp</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Dark Background Shadows</h4>
          <div style={{ 
            padding: "var(--spacing-lg)",
            backgroundColor: "#1a1a1a",
            borderRadius: "var(--border-radius-lg)",
            display: "flex",
            gap: "var(--spacing-md)",
            flexWrap: "wrap"
          }}>
            <div style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-main)",
              color: "white",
              borderRadius: "var(--border-radius-md)",
              boxShadow: "var(--box-shadow-soft-glow)",
              textAlign: "center",
              minWidth: "120px"
            }}>
              <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "bold" }}>Soft Glow</div>
            </div>
            
            <div style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-dark)",
              color: "white",
              borderRadius: "var(--border-radius-md)",
              boxShadow: "var(--box-shadow-strong-glow)",
              textAlign: "center",
              minWidth: "120px"
            }}>
              <div style={{ fontSize: "var(--font-size-sm)", fontWeight: "bold" }}>Strong Glow</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ marginBottom: "var(--spacing-2xl)" }}>
      <h3>UI Components with Shadows</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-lg)" }}>
        
        <div style={{
          padding: "var(--spacing-xl)",
          backgroundColor: "var(--color-tone)",
          borderRadius: "var(--border-radius-outer)",
          boxShadow: "var(--box-shadow-light-soft)"
        }}>
          <h4 style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-soft)"
          }}>
            Card Component
          </h4>
          <p style={{ margin: "0 0 var(--spacing-md) 0" }}>
            This card uses light-soft box shadow for subtle elevation and soft text shadow for better readability.
          </p>
          <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
            <button style={{
              padding: "var(--spacing-xs) var(--spacing-md)",
              backgroundColor: "var(--color-main)",
              color: "white",
              border: "none",
              borderRadius: "var(--border-radius-inner)",
              boxShadow: "var(--box-shadow-neutral)",
              cursor: "pointer"
            }}>
              Primary Action
            </button>
            <button style={{
              padding: "var(--spacing-xs) var(--spacing-md)",
              backgroundColor: "white",
              color: "var(--color-main)",
              border: "1px solid var(--color-main)",
              borderRadius: "var(--border-radius-inner)",
              boxShadow: "var(--box-shadow-light-soft)",
              cursor: "pointer"
            }}>
              Secondary
            </button>
          </div>
        </div>

        <div style={{
          padding: "var(--spacing-xl)",
          backgroundColor: "var(--color-dark)",
          color: "white",
          borderRadius: "var(--border-radius-outer)",
          boxShadow: "var(--box-shadow-strong-glow)"
        }}>
          <h4 style={{ 
            margin: "0 0 var(--spacing-md) 0",
            textShadow: "var(--text-shadow-glow)",
            color: "var(--color-link)"
          }}>
            Hero Section
          </h4>
          <p style={{ margin: "0 0 var(--spacing-md) 0", textShadow: "var(--text-shadow-soft)" }}>
            This hero section uses strong glow shadow to create dramatic lighting effect and glow text shadow for the heading.
          </p>
          <button style={{
            padding: "var(--spacing-sm) var(--spacing-lg)",
            backgroundColor: "var(--color-link)",
            color: "var(--color-base)",
            border: "none",
            borderRadius: "var(--border-radius-inner)",
            boxShadow: "var(--box-shadow-soft-glow)",
            cursor: "pointer",
            fontSize: "var(--font-size-lg)",
            fontWeight: "bold"
          }}>
            Get Started
          </button>
        </div>
      </div>
    </section>

    <section>
      <h3>Shadow Combinations</h3>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "var(--spacing-lg)" 
      }}>
        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "white",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-light-soft)",
          textAlign: "center",
          border: "1px solid var(--color-light)"
        }}>
          <h5 style={{ 
            margin: "0 0 var(--spacing-xs) 0",
            textShadow: "var(--text-shadow-soft)"
          }}>
            Subtle Card
          </h5>
          <p style={{ margin: 0, fontSize: "var(--font-size-sm)" }}>
            Light soft shadow + soft text shadow
          </p>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-main)",
          color: "white",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-soft-glow)",
          textAlign: "center"
        }}>
          <h5 style={{ 
            margin: "0 0 var(--spacing-xs) 0",
            textShadow: "var(--text-shadow-glow)"
          }}>
            Glowing Card
          </h5>
          <p style={{ margin: 0, fontSize: "var(--font-size-sm)" }}>
            Soft glow shadow + glow text shadow
          </p>
        </div>

        <div style={{
          padding: "var(--spacing-lg)",
          backgroundColor: "var(--color-light)",
          borderRadius: "var(--border-radius-lg)",
          boxShadow: "var(--box-shadow-light-sharp)",
          textAlign: "center"
        }}>
          <h5 style={{ 
            margin: "0 0 var(--spacing-xs) 0",
            textShadow: "var(--text-shadow-strong)"
          }}>
            Sharp Card
          </h5>
          <p style={{ margin: 0, fontSize: "var(--font-size-sm)" }}>
            Light sharp shadow + strong text shadow
          </p>
        </div>
      </div>
    </section>
  </div>
)

const meta: Meta<typeof BoxShadowShowcase> = {
  title: "theme/BoxShadow",
  component: BoxShadowShowcase,
}

export default meta

type Story = StoryObj<typeof BoxShadowShowcase>

export const Default: Story = {}