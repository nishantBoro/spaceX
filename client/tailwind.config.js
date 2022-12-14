/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    colors: {
      black: '#000000',
      white: {
        1: '#ffffff'
      },
      gray: {
        1: '#E6E7F1',
        2: '#f3f4f5',
        3: '#dbdde1',
        4: '#6c707a',
        5: '#151414'
      },
      blue: {
        1: '#0071c2',
        2: '#73c9e6',
        3: '#199fd9'
      }
    },
    spacing: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      48: '48px'
    },
    fontSize: {
      14: '14px',
      16: '16px',
      20: '20px',
      40: '40px'
    },
    screens: {
      mobile: { max: '820px' },
      desktop: { min: '821px' }
    },
    borderWidth: {
      0: '0px',
      1: '1px'
    }
  }
}
