import { css } from "@emotion/react"
import { variables } from "./variables.css"

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

  ${variables}

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
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--color-default);
    text-shadow: 0 0 2px var(--color-default);
    scrollbar-width: thin;
    scrollbar-color: var(--color-default) var(--color-dark);
    font-family: var(--font-family-serif);
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
    font-weight: var(--font-weight-bold);
    color: var(--color-light);
    letter-spacing: var(--letter-spacing-wide);
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
    font-size: var(--font-size-5xl);
  }
  h2 {
    font-size: var(--font-size-4xl);
  }
  h3 {
    font-size: var(--font-size-3xl);
  }
  h4 {
    font-size: var(--font-size-2xl);
  }
  h5 {
    font-size: var(--font-size-xl);
  }
  h6 {
    font-size: var(--font-size-lg);
  }
  p {
    font-size: var(--font-size-base);
  }
  b,
  strong {
    font-weight: var(--font-weight-bolder);
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
    padding-left: var(--spacing-2xl);
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
    font-family: var(--font-family-mono);
    overflow-x: auto;
  }
  pre {
    display: block;
    border-width: 1px 0 1px 0;
    padding: var(--spacing-lg);
    font-size: var(--font-size-sm);
    text-shadow: none;
    box-shadow: 0px 0px 12px var(--color-default) inset;
  }
  blockquote {
    border-left: 4px solid var(--color-default);
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-lg);
    padding-top: var(--spacing-sm);
    padding-bottom: var(--spacing-sm);
    background-color: rgba(var(--color-default-rgb), 0.05);
  }
  blockquote p:last-of-type {
    margin-bottom: 0;
  }
  table {
    border-collapse: separate;
    border-spacing: var(--spacing-xs);
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
    padding: var(--spacing-xs) var(--spacing-sm);
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
    margin: var(--spacing-lg) 0;
  }
  fieldset {
    border-style: solid;
    border-width: 1px;
    border-color: #0b8481;
    padding: var(--spacing-lg);
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: var(--line-height-tight);
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
    margin-bottom: var(--spacing-lg);
  }
`
