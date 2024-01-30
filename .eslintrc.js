module.exports = {
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    'plugin:@next/next/recommended'
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/semi": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "no-anonymous-default-export": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-case-declarations": "off",
    "no-prototype-builtins": "warn",
    "no-useless-escape": "warn",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true
      }
    ],
    "simple-import-sort/exports": "error",
    "prettier/prettier": "error",
    "prefer-template": "warn",
    "no-extra-boolean-cast": "warn",
    "no-empty-pattern": "warn",
    "no-unsafe-optional-chaining": "warn",
    "prefer-const": "warn",
    "no-irregular-whitespace": "warn",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "jsx-a11y/iframe-has-title": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/no-redundant-roles": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-useless-catch": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
    ],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          [
            "^react",
            "^\\w",
            "^@\\w",
            "^/\\w",
            "^\\.(?!/?$)",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
            "^.+\\.s?css$"
          ]
        ]
      }
    ]
  }
};
