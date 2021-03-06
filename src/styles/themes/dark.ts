const dark = {
  colors: {
    background: '#131314',
    white: '#eeeeee',
    highlight: '#8257e6',
    black: '#27242e',
    shape: '#3c3847',
    grayHard: '#212124',
    gray: '#9e948a',
    orange: '#FF9000',
    inputs: '#211e29',
    error: '#c53030',
    toasts: {
      info: {
        color: '#27242e',
        background: '#90cdf4',
      },
      success: {
        color: '#27242e',
        background: '#9ae6b4',
      },
      error: {
        color: '#27242e',
        background: '#feb2b2',
      },
      warning: {
        color: '#27242e',
        background: '#fbd38d',
      },
    },
  },
  sizes: {
    container: '80rem',
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
  },
} as const;

export default dark;
