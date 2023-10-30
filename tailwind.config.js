/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      colors: {
        mainblue: {
          DEFAULT: '#87cefa', // Light mode color
          dark: '#87cefa', // Dark mode color
        },
        input: {
          DEFAULT: '#94aabf', // Light mode color
          dark: '#4f5b93', // Dark mode color
        },
      },
      fontSize: {
        20: '20',
        18: '18',
        30: '30',
      },
      padding: {
        5: '5',
        10: '10',
        11: '11',
        15: '15',
        18: '18',
        25: '25',
        20: '20',
      },
      borderRadius: {
        main: '30px',
      },
      lineHeight: {
        loose: '6',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
// px for horizontal; py for vertical; pt-top, pb-bottom pl-left, pr-righ
