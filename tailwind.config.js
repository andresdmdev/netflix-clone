/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: { 
      0: '0rem',
      0.1: '0.021rem',
      0.15: '0.025rem',
      0.25: '0.0625rem',
      0.35: '1.25px',
      0.5: '0.125rem',
      0.75: '0.185rem',
      1: '0.25rem',
      1.2: '0.3rem',
      1.3: '0.325rem',
      1.4: '0.35rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.25: '0.55rem',
      2.5: '0.625rem',
      2.75: '0.68rem',
      2.85: '0.72rem',
      3: '0.75rem',
      3.5: '0.875rem',
      3.75: '0.935rem',
      4: '1rem',
      4.5: '1.15rem',
      5: '1.25rem',
      6: '1.5rem',
      6.25: '1.625rem',
      6.5: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      26: '6.5rem',
      28: '7rem',	
      30: '7.5rem',
      32: '8rem',	
      36: '9rem',	
      40: '10rem',	
      44: '11rem',	
      48: '12rem',
      50: '12.5rem',	
      52: '13rem',	
      56: '14rem',	
      64: '16rem',	
      72: '18rem',	
      80: '20rem',	
      96: '24rem',
      100: '30rem',
      110: '35rem',	
      'px': '1px',	
      'auto': 'auto',	
      '1/2': '50%',	
      '1/3': '33.333333%',	
      '2/3': '66.666667%',	
      '1/4': '25%',
      '2/4': '50%',	
      '3/4': '75%',	
      '1/5': '20%',	
      '2/5': '40%',	
      '3/5': '60%',	
      '4/5': '80%',	
      '1/10': '10%',
      '13/100': '13%',
      '5/100': '5%',
      '1/6': '16.666667%',	
      '2/6': '33.333333%',	
      '3/6': '50%',	
      '4/6': '66.666667%',	
      '5/6': '83.333333%',	
      '1/12': '8.333333%',	
      '2/12': '16.666667%',	
      '3/12': '25%',
      '3/10': '30%',	
      '4/12': '33.333333%',	
      '7/20': '35%',
      '5/12': '41.666667%',	
      '6/12': '50%',	
      '7/12': '58.333333%',	
      '8/12': '66.666667%',	
      '9/12': '75%',	
      '10/12': '83.333333%',	
      '11/12': '91.666667%',
      92: '92.5%',
      96.5: '96%',
      'full': '100%',	
      'double': '200%',
      'doubleHalf': '250%',
      'doubleHalfMore': '280%',
      'triple': '300%',	
      'screen': '100vw',      	
      'min': 'min-content',	
      'max': 'max-content',	
      'fit': 'fit-content',
      'sliderLarge': '672px',
      'imgSliderWidth': '240px',
      'imgSliderHeight': '133px',
      'imgGridBackdropWidth': '270px',
      'imgGridBackdropHeight': '200px',
      'imgGridBackdropWidthSmall': '160px',
      'imgGridBackdropHeightSmall': '110px',
      'imgSliderHeightSmall': '74px',
      'imgSliderWidthSmall': '133px',
      'imgSliderWidthMedium': '181px',
      'imgSliderHeightMedium': '101px',
      'sliderWidth': '2808px',
    },
    fontSize: {
      'micro': '.1rem',
      'mini': '.2rem',
      'sss': '.3rem',
      'ss': '.4rem',
      's': '.5rem',
      'xss': '7px',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1.5xl': '1.35rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'sans': 'Montserrat, sans-serif'
    },
    colors: {
      'gray-tones': { 
        '0': '#fff',
        '10': '#e5e5e5', 
        '50': '#707070',  
        '100': '#666666',  
        '200': '#515151',  
        '300': '#3D3D3D',  
        '400': '#282828',
        '450': '#1A1A1A',
        '500': '#141414',  
        '600': '#000000',  
      },
      'red-tones': {  
        '50': '#FCAAAE',  
        '100': '#FB969B',  
        '200': '#F96F76',  
        '300': '#F84851',  
        '400': '#F6212B',  
        '500': '#E50914',  
        '600': '#AF070F',  
        '700': '#79050B',  
        '800': '#430306',  
        '900': '#0D0101'
      },
    },
    extend: {
      zIndex: {
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      scale: {
        '130': '1.30',
        '140': '1.40',
        '175': '1.75',
        '200': '2',
        '300': '3',
        '350': '3.5',
        '400': '4',
        '500': '5',
      },
      animation: {
        largeSlider: 'largeSlider 700ms ease-in-out forwards',
        delayShow: 'delayShow 600ms ease-in-out',
        fade: 'fade 500ms ease-in-out forwards',
        like: 'like 2s'
      },
      keyframes: {
        largeSlider: {
          'from': { 
            transform: 'translateY(50%) ',
          },
          'to': { transform: 'scale(3)' }
        },
        delayShow: {
          'from': {
            transform: 'scale(0)',
          },
          'to': {
            transform: 'scale(1)'
          }
        },
        fade: {
          '0%': {
            transform: 'scale(1)',
            height: 'scale(1)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(3.5)',
            height: 'scale(3.5)',
            opacity: '1'
          }
        },
        like: {
          '0%, 100%': {
            transform: 'translateY(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      }
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('child(5)', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`child(5)${separator}${className}`)}:nth-child(5n)`
        })
      })
    }),
    plugin(function({ addVariant, e }) {
      addVariant('child(6)', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`child(6)${separator}${className}`)}:nth-child(6n)`
        })
      })
    }),
    plugin(function({ addVariant, e }) {
      addVariant('child(7)', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`child(7)${separator}${className}`)}:nth-child(7)`
        })
      })
    }),
    plugin(function({ addVariant, e }) {
      addVariant('child(13)', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`child(13)${separator}${className}`)}:nth-child(13)`
        })
      })
    })
  ]
}
