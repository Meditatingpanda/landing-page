/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        br:'600px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#0C9488',
        'secondary': '#F3F4F6',
        'tertiary': '#1A212A',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }

    }
  },
  important: true,
  plugins: [],
}