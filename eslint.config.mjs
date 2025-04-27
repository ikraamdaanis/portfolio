import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import filenamesSimple from "eslint-plugin-filenames-simple";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";

const eslintConfig = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "no-relative-import-paths": noRelativeImportPaths,
      "filenames-simple": filenamesSimple
    },
    rules: {
      "no-relative-import-paths/no-relative-import-paths": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          ignoreRestArgs: true
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ]
      // "filenames-simple/naming-convention": [
      //   "error",
      //   {
      //     rule: "kebab-case",
      //     excepts: ["index"]
      //   }
      // ]
    }
  }
];

export default eslintConfig;
