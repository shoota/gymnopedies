/**
 * <GlobalStyles /> — drop-in typography reset for raw HTML blog content.
 *
 * Use this component once at the root of a reading-oriented page (or anywhere
 * that bare HTML is rendered — for example, `dangerouslySetInnerHTML` for a
 * Markdown-rendered post). It injects a `<style>` element that styles bare
 * h1-h6, p, ul/ol, blockquote, table, code/pre, figure, hr, fieldset, etc. so
 * the page maintains gymnopédies' dark / serif / glow aesthetic without
 * needing every element to be a React component.
 *
 * The rules reference the same CSS variables (--background, --foreground,
 * --primary, --card, --muted-foreground, --font-serif, --font-mono, --border)
 * defined in `src/styles/globals.css`, so they adapt to the active theme.
 */

const GLOBAL_CSS = /* css */ `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: var(--background);
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.3;
    color: var(--foreground);
    text-shadow: 0 0 2px var(--muted-foreground);
    scrollbar-width: thin;
    scrollbar-color: var(--muted-foreground) var(--card);
  }

  ::selection {
    background-color: rgba(0, 248, 248, 0.3);
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 2rem;
    font-weight: 700;
    color: var(--foreground);
    letter-spacing: 0.5px;
    text-shadow: 0 0 4px var(--foreground);
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    text-shadow: 0 0 4px var(--foreground);
  }
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.625rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.375rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1.125rem; }

  p {
    margin: 0 0 2rem;
    font-size: 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  a {
    color: var(--primary);
    outline: none;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: var(--primary);
    text-shadow: 0 0 4px var(--primary);
  }
  a h1,
  a h2,
  a h3,
  a h4,
  a h5,
  a h6 {
    text-shadow: 0 0 2px var(--foreground);
  }

  ul,
  ol {
    margin: 0 0 2rem;
    padding-left: 3rem;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  ul ul,
  ol ul {
    list-style: circle;
  }
  ul ul ul,
  ol ol ol {
    list-style: square;
  }
  ul ol,
  ol ol {
    list-style: decimal;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-bottom: 0;
  }
  li {
    margin-top: 0.4rem;
  }
  li::marker {
    color: var(--muted-foreground);
  }

  code,
  pre {
    font-family: var(--font-mono);
    overflow-x: auto;
  }
  pre {
    margin: 0 0 2rem;
    display: block;
    border-width: 1px 0;
    border-style: solid;
    border-color: var(--border);
    padding: 2rem;
    font-size: 0.875rem;
    text-shadow: none;
    box-shadow: 0 0 12px var(--muted-foreground) inset;
  }

  blockquote {
    margin: 0 0 2rem;
    border-left: 4px solid var(--muted-foreground);
    padding: 0.75rem 2rem 0.75rem 1.5rem;
    background-color: rgba(153, 153, 153, 0.05);
  }
  blockquote p:last-of-type {
    margin-bottom: 0;
  }

  table {
    margin: 0 0 2rem;
    border-collapse: separate;
    border-spacing: 0.5rem;
    text-align: left;
    text-shadow: none;
  }
  thead tr {
    background-color: rgba(153, 153, 153, 0.15);
  }
  thead th,
  thead td {
    border-bottom: 1px solid var(--primary);
  }
  tbody tr {
    background-color: rgba(153, 153, 153, 0.05);
  }
  tbody tr:hover,
  tbody tr:focus {
    color: var(--primary);
    background-color: rgba(153, 153, 153, 0.1);
  }
  tbody td {
    border-bottom: 1px solid var(--foreground);
  }
  th,
  td {
    padding: 0.5rem 0.75rem;
  }
  tr {
    transition: background-color 100ms ease-out;
  }

  img {
    max-width: 100%;
  }
  figure {
    margin: 0 0 2rem;
  }
  figure img {
    margin-bottom: 0;
    vertical-align: top;
  }

  hr {
    margin: 2rem 0;
    display: block;
    height: 0;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: var(--muted-foreground);
  }

  fieldset {
    margin: 0 0 2rem;
    border-style: solid;
    border-width: 1px;
    border-color: #0b8481;
    padding: 2rem;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.2;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    display: inline-block;
    outline: none;
    border: none;
    cursor: pointer;
    -webkit-appearance: button;
  }
  button:hover,
  [type="button"]:hover,
  [type="reset"]:hover,
  [type="submit"]:hover,
  button:focus,
  [type="button"]:focus,
  [type="reset"]:focus,
  [type="submit"]:focus {
    outline: none;
  }
  button:disabled,
  [type="button"]:disabled,
  [type="reset"]:disabled,
  [type="submit"]:disabled {
    cursor: auto;
  }
  button,
  input {
    overflow: visible;
  }
`

export function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
}
