module.exports = {
  plugins: [
    "compat", // Browser compatibility
    "destructuring",
    "jsx-max-len",
    "prettier",
    "react",
    "test-names"
  ],
  extends: ["airbnb"],
  rules: {
    "prettier/prettier": "error",

    "destructuring/in-methods-params": "error",
    "compat/compat": "error",
    "test-names/blacklist-word-in-test-name": [2, "should"],

    // Ternary
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "multiline-ternary": "off", // allow both multiline and single line

    // Airbnb overrides
    curly: ["error", "all"],
    "react/jsx-filename-extension": "off", // Allow JSX in .js files
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: true // We do allow the same precedence
      }
    ]
  }
};
