import { css } from "@emotion/react"
export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

  :root {
    --color-base: #333333;
    --color-main: #35434c;
    --color-default: #999999;
    --color-light: #d6d6d6;
    --color-dark: #04252b;
    --color-tone: #cfd8de;
    --color-link: #d5ca86;
    --color-default-rgb: 153, 153, 153;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background-color: var(--color-base);
    font-size: 16px;
    line-height: 1.3;
    color: var(--color-default);
    text-shadow: 0 0 2px var(--color-default);
    scrollbar-width: thin;
    scrollbar-color: var(--color-default) var(--color-dark);
    font-family: "Merriweather", "Times New Roman", "YuMincho",
      "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
  }

  html ::selection,
  body ::selection {
    background-color: rgba(0, 248, 248, 0.3);
    color: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    color: var(--color-light);
    letter-spacing: 0.5px;
    text-shadow: 0 0 4px var(--color-light);
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    text-shadow: 0 0 4px var(--color-light);
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.625rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.375rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1.125rem;
  }
  p {
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
    color: var(--color-link);
    outline: none;
    text-decoration: none;

    :hover,
    :focus {
      color: var(--color-link);
      text-shadow: 0 0 4px var(--color-link);
    }
  }
  a h1,
  a h2,
  a h3,
  a h4,
  a h5,
  a h6 {
    text-shadow: 0 0 2px var(--color-light);
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-bottom: 0;
  }
  ul li::marker {
    content: "⌁ ";
    display: inline-block;
    margin-top: 0.05em;
    font-size: 0.9em;
  }
  code,
  pre {
    font-family: monospace;
    overflow-x: auto;
  }
  pre {
    display: block;
    border-width: 1px 0 1px 0;
    padding: 20px;
    font-size: 0.9rem;
    text-shadow: none;
    box-shadow: 0px 0px 12px var(--color-default) inset;
  }
  blockquote {
    border-left: 4px solid var(--color-default);
    padding-left: 16px;
    padding-right: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: rgba(var(--color-default-rgb), 0.05);
  }
  blockquote p:last-of-type {
    margin-bottom: 0;
  }
  table {
    border-collapse: separate;
    border-spacing: 4px;
    text-align: left;
    text-shadow: none;
  }
  thead tr {
    background-color: rgba(var(--color-default-rgb), 0.15);
  }
  thead th,
  thead td {
    border-bottom: 1px solid var(--color-link);
  }
  tbody tr {
    background-color: rgba(var(--color-default-rgb), 0.05);
  }
  tbody tr:hover,
  tbody tr:focus {
    color: var(--color-link);
    background-color: rgba(var(--color-default-rgb), 0.1);
  }
  tbody td {
    border-bottom: 1px solid var(--color-light);
  }
  th,
  td {
    padding: 5px 8px;
  }
  tr {
    transition: background-color 100ms ease-out;
  }
  img {
    max-width: 100%;
  }
  figure img {
    margin-bottom: 0;
    vertical-align: top;
  }
  hr {
    display: block;
    height: 0;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: var(--color-default);
    margin: 1.25rem 0;
  }
  fieldset {
    border-style: solid;
    border-width: 1px;
    border-color: #0b8481;
    padding: 20px;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  pre,
  blockquote,
  table,
  figure,
  hr,
  fieldset {
    margin-bottom: 20px;
  }
`
