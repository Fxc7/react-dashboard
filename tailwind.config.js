/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT.js';
import tailwind from 'tailwindcss/plugin';
import daisyui from 'daisyui';
import highlight from 'tailwindcss-highlights';

import { Themes, customConfig, myTheme } from './configs.js';

const textShadow = tailwind(({ matchUtilities, theme }) => {
  matchUtilities({
    'text-shadow': (value) => ({
      'textShadow': value
    })
  }, {
    values: theme('textShadow')
  })
});

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'media',
    extend: {
      backgroundColor: ({ theme }) => ({
        ...theme('colors')
      }),
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '0 4px 6px -1px var(--tw-shadow-color)',
        lg: '0 10px 15px -3px var(--tw-shadow-color)',
        xl: '0 20px 25px -5px var(--tw-shadow-color)',
        '2xl': '0 25px 50px -12px var(--tw-shadow-color)',
        inner: 'inset 0 2px 4px 0 var(--tw-shadow-color)',
        none: 'none',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
      },
    },
  },
  plugins: [highlight, daisyui, textShadow],
  daisyui: {
    themes: [
      {
        ...myTheme,
      },
      ...Themes,
      { procyon: customConfig }
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: true
  }
});