module.exports = {
  theme: {
    screens: {
			sm: '640px',
      md: '768px',
      lg: '1024px',
			xl: '1280px',
			'2xl': '1600px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      grey: {
        'light': '#F4F4F4',
        'default': '#dbdbdb',
        'dark': '#C7C7C7',
      },
      primary: {
        'light': '#EAF37F',
        'default': '#D1DD45',
        'dark': '#9ba33c',
      },
      secondary: {
        'light': '#1D9F91',
        'default': '#198275',
        'dark': '#04453D',
      },
      tertiary: {
        'light': '#085c52',
        'default': '#96FAEE',
        'dark': '#03332D',
			},
			'error': '#C53030',
    },
    fontSize: {
      xs: '0.75rem', // 14
      sm: '1rem', // 16
      base: '1.125rem', // 18
      lg: '1.25rem', // 20
      xl: '1.625rem', // 28
      '2xl': '1.875rem', // 30
      '3xl': '2.5rem', // 40
      '4xl': '3rem', // 48
      '5xl': '4rem', // 64
      '6xl': '5rem', // 80
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.03), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'full': '0px 25px 50px -12px rgba(0, 0, 0, 0.5)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    extend: {
      fontFamily: {
        sans: [ 'Muli', 'Arial', 'sans-serif' ],
        display: [ 'Poppins', 'Arial', 'sans-serif' ],
      },
      borderRadius: {
        xl: '3rem',
      },
    }
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}