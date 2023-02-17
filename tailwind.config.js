module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Open Sans', 'Poppins'],
            body: ['Open Sans', 'Roboto'],
        },
        extend: {
            animation: {
                'spin-slow': 'spin 1s linear 1',
            },
            fontSize: {
                14: '14px',
                18: '18px',
                20: '20px',
            },
            backgroundColor: {
                'main-bg': '#FAFBFB',
                'main-dark-bg': '#20232A',
                'secondary-dark-bg': '#33373E',
                'light-gray': '#F7F7F7',
                'half-transparent': 'rgba(0, 0, 0, 0.5)',
            },
            borderWidth: {
                1: '1px',
            },
            borderColor: {
                color: 'rgba(0, 0, 0, 0.1)',
            },
            width: {
                400: '400px',
                760: '760px',
                780: '780px',
                800: '800px',
                1000: '1000px',
                1200: '1200px',
                1400: '1400px',
            },
            height: {
                80: '80px',
            },
            minHeight: {
                590: '590px',
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
    },
    plugins: [],
};