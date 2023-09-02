export default {
  extends: [
    "@hyoban/eslint-config-react",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": "off",
  },
}
