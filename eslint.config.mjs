import js from "@eslint/js";
import astroParser from "astro-eslint-parser"; // 👈 Importe diretamente
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	// Global configuration
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	// Base configs
	js.configs.recommended,
	tseslint.configs.recommended,

	// Prettier config
	{
		plugins: {
			prettier: prettier,
		},
		rules: {
			"prettier/prettier": "off",
		},
	},

	// astro setup with a11y
	...astro.configs.recommended, // 👈 Use spread operator aqui
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser, // 👈 Agora é a variável importada
			parserOptions: {
				parser: tseslint.parser, // 👈 Use tseslint.parser diretamente
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
				// project: "./tsconfig.json", // 👈 Comente ou remova - não precisa aqui
			},
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},

	// Ignore patterns
	{
		ignores: ["dist/**", "**/*.d.ts", ".github/"],
	},
]);
