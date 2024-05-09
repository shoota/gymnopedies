import { css } from "@emotion/react"
import { colors } from "./color"
export const global = css`
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
    text-shadow: 0 0 4px ${colors.light};
    scrollbar-width: thin;
    scrollbar-color: #0b8481 #04252b;
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
    text-shadow: 0 0 8px ${colors.light};
  }
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    text-shadow: 0 0 8px ${colors.light};
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
    color: ${colors.tone};
    text-shadow: 0 0 4px ${colors.light};
    outline: none;
    text-decoration: none;
    transition: color 100ms ease-out;
  }
  a h1,
  a h2,
  a h3,
  a h4,
  a h5,
  a h6 {
    text-shadow: 0 0 2px ${colors.light};
  }
  a:hover,
  a:focus {
    color: #ffc69f;
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
    border-style: solid;
    border-color: #05c6c1;
    padding: 20px;
    font-size: 0.9rem;
    background-color: rgba(62, 251, 251, 0.05);
  }
  blockquote {
    border-left: 6px solid #00f8f8;
    padding-left: 26px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(62, 251, 251, 0.05);
  }
  blockquote p:last-of-type {
    margin-bottom: 0;
  }
  table {
    border-collapse: separate;
    border-spacing: 5px;
    width: 100%;
    text-align: left;
  }
  thead tr {
    background-color: rgba(62, 251, 251, 0.15);
  }
  thead th,
  thead td {
    border-bottom: 1px solid #f66901;
  }
  tbody tr {
    background-color: rgba(62, 251, 251, 0.05);
  }
  tbody tr:hover,
  tbody tr:focus {
    background-color: rgba(62, 251, 251, 0.1);
  }
  tbody td {
    border-bottom: 1px solid #0b8481;
  }
  th,
  td {
    padding: 5px 8px;
  }
  tr {
    -webkit-transition: background-color 100ms ease-out;
    transition: background-color 100ms ease-out;
  }
  img {
    max-width: 100%;
  }
  figure img {
    margin-bottom: 0;
    vertical-align: top;
  }
  figcaption {
    padding: 10px;
    background-color: rgba(62, 251, 251, 0.05);
  }
  hr {
    display: block;
    height: 0;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #7efcf6;
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
  input,
  textarea,
  select {
    display: block;
    outline: none;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: ${colors.light};
    padding: 5px 10px;
    width: 100%;
    line-height: 30px;
    color: #ffc69f;
    background-color: transparent;
    -webkit-transition:
      border-color 100ms ease-out,
      background-color 100ms ease-out,
      box-shadow 100ms ease-out;
    transition:
      border-color 100ms ease-out,
      background-color 100ms ease-out,
      box-shadow 100ms ease-out;
  }
  input::-webkit-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  input::-moz-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  input:-ms-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  textarea::-webkit-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  textarea::-moz-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  textarea:-ms-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  select::-webkit-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  select::-moz-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  select:-ms-input-placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  input::placeholder,
  textarea::placeholder,
  select::placeholder {
    color: rgba(255, 198, 159, 0.5);
  }
  input:hover,
  textarea:hover,
  select:hover,
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #ffc69f;
    background-color: rgba(163, 45, 8, 0.3);
    box-shadow: 0 0 2px #a32d08;
  }
  input:disabled,
  textarea:disabled,
  select:disabled {
    border-color: #0b8481;
    color: #05c6c1;
    background-color: transparent;
    box-shadow: none;
    cursor: auto;
  }
  input:disabled::-webkit-input-placeholder {
    color: #0b8481;
  }
  input:disabled::-moz-placeholder {
    color: #0b8481;
  }
  input:disabled:-ms-input-placeholder {
    color: #0b8481;
  }
  textarea:disabled::-webkit-input-placeholder {
    color: #0b8481;
  }
  textarea:disabled::-moz-placeholder {
    color: #0b8481;
  }
  textarea:disabled:-ms-input-placeholder {
    color: #0b8481;
  }
  select:disabled::-webkit-input-placeholder {
    color: #0b8481;
  }
  select:disabled::-moz-placeholder {
    color: #0b8481;
  }
  select:disabled:-ms-input-placeholder {
    color: #0b8481;
  }
  input:disabled::placeholder,
  textarea:disabled::placeholder,
  select:disabled::placeholder {
    color: #0b8481;
  }
  option {
    color: #ffc69f;
    background-color: #a32d08;
  }
  button,
  input {
    overflow: visible;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  progress {
    vertical-align: baseline;
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
