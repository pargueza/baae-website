/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff3232',
        'accent-dark': '#ff5b3d',
        'accent-light': '#ffb35c',
        'accent-green': '#78af2d',
        'yellow-green': '#85be3a',
      },
    },
  },
  plugins: [],
}