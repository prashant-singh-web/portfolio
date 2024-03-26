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
      'sma':'660px',
      'smb':'680px',
      'smc':'700px',
      'smd':'720px',
      'sme':'740px',
      'md':'768px',
      'mda':'790px',
      'mdb':'820px',
      'mdc':'840px',
      'mdd':'870px',
      'mde':'920px',
      'mdf':'950px',
      'mdg':'1000px',
      'lg':'1022px',
      'lga':'1082px',
      'lgb':'1140px',
      'lgc':'1200px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      animation: {
        'rotate-x': 'rotate-x 25s linear infinite',
        'rotate-y': 'rotate-y 25s linear infinite',
      },
    },
   
  },
  plugins: [],
}
