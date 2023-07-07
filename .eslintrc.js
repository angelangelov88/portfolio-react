module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
  ],
  rules: {
    indent: [1, 2],
    "linebreak-style": [
      "error",
      "windows",
      "unix"
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "import/no-unresolved": 0, // Ensures an imported module can be resolved to a module on the local filesystem
    "max-len": 0, // enforces a maximum line length to increase code readability and maintainability
    "linebreak-style": 0, // enforces consistent line endings independent of operating system

    "react/prop-types": 0, // Prevent missing props validation in a React component definition
    "react/require-default-props": 0, // Enforce a defaultProps definition for every prop that is not a required prop.
    "react/default-props-match-prop-types": 0, // Enforce all defaultProps are defined and not "required" in propTypes.
    "react/button-has-type": 0, // Forbid "button" element without an explicit "type" attribute
    "react/jsx-props-no-spreading": 0,

    "comma-dangle": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-nested-ternary": "off"
  }
};
