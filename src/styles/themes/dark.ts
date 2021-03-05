const dark = {
  colors: {
    background: '#06092b',
    white: '#eeeeee',
    highlight: '#7c62d4', // '#e20e8d',
    black: '#27242e',
    shape: '#3c3847',
    grayHard: '#6e6359',
    gray: '#9e948a',
    orange: '#FF9000',
    inputs: '#211e29',
    error: '#c53030',
    toasts: {
      info: {
        color: '#3172b7',
        background: '#ebf8ff',
      },
      success: {
        color: '#2e656a',
        background: '#e6fffa',
      },
      error: {
        color: '#c53030',
        background: '#fddede',
      },
      warning: {
        color: '#FF9000',
        background: '#fcf4e4',
      },
    },
  },
  sizes: {
    container: '100rem',
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
  },
} as const;

export default dark;
