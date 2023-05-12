/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          'blue': '#1fb6ff',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
        fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
          serif: ['DM Serif Display', 'serif'],
        },
        extend: {
            fontSize: {
                sm: ['0.8rem', '1.25rem'],
                base: ['1rem', '1.5rem'],
                lg: ['1.25rem', '1.75rem'],
                xl: ['1.5rem', '2rem'],
                xxl: ['3rem', '4rem'],
                hero: ['6rem', '7rem']
            },
        }
    },
    plugins: []
  }