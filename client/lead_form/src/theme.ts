import { createTheme } from '@mui/material/styles';
import { heIL } from '@mui/material/locale';

const theme = createTheme( {
  palette: {
    mode: 'light',
    primary: {
      main: '#ed5b2c',
      light: '#ff8f5a',
      dark: '#b2401f',
      contrastText: '#ffffff',
    },

    secondary: {
      main: '#ffcf6d',
      light: '#ffe39e',
      dark: '#cc9e3c',
      contrastText: '#212121',
    },
    info: {
      main: '#61a6ab',
      light: '#8fd0d4',
      dark: '#3e7b7f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#ffffff',
    },

    text: {
      primary: '#fff',
      secondary: '#555555',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#555555',
        },
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#61a6ab',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ddd',
          '&.Mui-focused': {
            color: '#61a6ab',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: `'Rubik', sans-serif`,
  }

}, heIL );

export default theme;