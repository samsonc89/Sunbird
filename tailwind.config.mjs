/** @type {import('tailwindcss').Config} */
export const content = [
	'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'
];
export const theme = {
	extend: {},
};
export const plugins = [
	require('flowbite/plugin')
];