import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          letterSpacing: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "'SamsungOne', sans-serif",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      l: 1440,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'SamsungOne, sans-serif',
  },
  overrides: {},
});

export default theme;
