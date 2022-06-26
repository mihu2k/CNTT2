import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          letterSpacing: 0,
          fontSize: '1.6rem',
          lineHeight: 1.5,
          textRendering: 'optimizeSpeed',
          color: 'var(--text-color)',
          // overflowY: 'overlay',
          fontFamily: `'SamsungOne', sans-serif`,
          '& .MuiPaper-root-MuiAccordion-root': {
            boxShadow: 'none',
          },
        },
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
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
