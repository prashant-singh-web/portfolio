/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xsm': '320px',
      'sm':'640px',
      'md':'768px',
      'lg':'1022px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
    },
   
  },
  plugins: [],
}
