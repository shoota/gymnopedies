import { css } from "@emotion/react"
import { colors, colorsRGB } from "./color"
export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background-color: ${colors.base};
    font-size: 16px;
    line-height: 1.3;
    color: ${colors.light};
    text-shadow: 0 0 2px ${colors.light};
    scrollbar-width: thin;
    scrollbar-color: ${colors.default} ${colors.dark};
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
    color: ${colors.light};
    letter-spacing: 0.5px;
    text-shadow: 0 0 4px ${colors.light};
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    text-shadow: 0 0 4px ${colors.light};
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
    color: ${colors.link};
    outline: none;
    text-decoration: none;

    :hover,
    :focus {
      color: ${colors.link};
      text-shadow: 0 0 4px ${colors.link};
    }
  }
  a h1,
  a h2,
  a h3,
  a h4,
  a h5,
  a h6 {
    text-shadow: 0 0 2px ${colors.light};
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
  }
  pre {
    display: block;
    border-width: 1px 0 1px 0;
    padding: 20px;
    font-size: 0.9rem;
    text-shadow: none;
    box-shadow: 0px 0px 12px ${colors.default} inset;
  }
  blockquote {
    border-left: 6px solid #00f8f8;
    padding-left: 26px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(${colorsRGB.default}, 0.05);
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
    background-color: rgba(${colorsRGB.default}, 0.15);
  }
  thead th,
  thead td {
    border-bottom: 1px solid ${colors.link};
  }
  tbody tr {
    background-color: rgba(${colorsRGB.default}, 0.05);
  }
  tbody tr:hover,
  tbody tr:focus {
    color: ${colors.link};
    background-color: rgba(${colorsRGB.default}, 0.1);
  }
  tbody td {
    border-bottom: 1px solid ${colors.light};
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
    border-radius: 4px;
    box-shadow: 0 0 16px ${colors.light};
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
    border-color: ${colors.default};
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
