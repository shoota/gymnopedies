module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "storybook-static"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      // shadcn-generated UI exports component + cva variant constants in one file.
      // It's an accepted pattern in the shadcn ecosystem; turn the warning off there.
      files: ["src/components/ui/**/*.{ts,tsx}", "src/main.tsx"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
}
