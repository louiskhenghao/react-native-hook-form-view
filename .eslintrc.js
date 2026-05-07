module.exports = {
  root: true,

  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["tsconfig.json"]
  },

  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import"
  ],

  env: {
    browser: true,
    es6: true,
    jest: true
  },

  rules: {
    // React (React Native safe defaults)
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-inline-styles": "off",

    // TypeScript (safe defaults for libraries)
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // Import rules (kept minimal to avoid RN pain)
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",

    // Prettier integration
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};