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
    overrides: {},
});

export default theme;
