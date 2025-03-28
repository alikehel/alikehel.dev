import pluginJs from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        plugins: {
            react: pluginReact,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
        },
    },
    {
        plugins: {
            "@next/next": pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
        },
    },
    {
        plugins: {
            "react-compiler": reactCompiler,
        },
        rules: {
            "react-compiler/react-compiler": "error",
        },
    },
    {
        files: ["src/**/*"],
        plugins: {
            "check-file": checkFile,
        },
        rules: {
            "check-file/filename-naming-convention": [
                "error",
                {
                    "**/*.{ts,tsx}": "KEBAB_CASE",
                },
                {
                    ignoreMiddleExtensions: true,
                },
            ],
            "check-file/folder-naming-convention": [
                "error",
                {
                    "src/**/!^[.*": "KEBAB_CASE",
                },
            ],
        },
    },
];
