module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.*?.json", "tsconfig.json"],
        createDefaultProgram: true
      },
      plugins: ["import"],
      extends: [
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
        "prettier"
      ],
      rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "lines-between-class-members": "off",
        "@typescript-eslint/unbound-method": [
          "error",
          {
            ignoreStatic: true
          }
        ]
      }
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { code: 140 }]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    },
    {
      files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
      parserOptions: {
        project: "./tsconfig.spec.json"
      },
      // Правила для линтера
      // extends: ['plugin:jasmine/recommended'],
      // Плагин для запуска правил
      // plugins: ['jasmine'],
      // env: { jasmine: true },
      // Отключим правило 'no-unused-vars'
      rules: {
        // '@typescript-eslint/no-unused-vars': 'off',
      }
    }
  ]
};
