/** @type {import("prettier").Config} */
export default {
	singleQuote: false,
	semi: true,
	printWidth: 100,
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
};
