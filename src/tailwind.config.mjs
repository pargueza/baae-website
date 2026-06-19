/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        cinnabar: '#ff3232',
        tomato: '#ff5b3d',
        tangerine: '#ff8348',
        'sandy-brown': '#ffb35c',
        'lime-moss': '#78af2d',
        'yellow-green': '#85be3a',
        
        // Accent aliases
        accent: '#ff3232',
        'accent-dark': '#ff5b3d',
        'accent-light': '#ffb35c',
        'accent-green': '#78af2d',
        
        // Text Colors
        text: '#2a2a2a',
        white: '#fafafa',
      },
    },
  },
  plugins: [],
}