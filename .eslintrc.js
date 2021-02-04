module.exports = {
  extends: ["airbnb", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/anchor-has-content": "off",
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
}
