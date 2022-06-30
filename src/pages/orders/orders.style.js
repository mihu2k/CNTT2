import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '32px',
    '& .MuiPaper-root': {
      height: 'fit-content',
      borderRadius: '0',
      borderBottomRightRadius: '26px',
      borderBottomLeftRadius: '26px',
    },

    '& .MuiInputLabel-root': {
      fontSize: '1.6rem',
      color: '#8f8f8f',
    },

    '& .MuiInputBase-root': {
      fontSize: '1.8rem',
      marginBottom: '10px',

      display: 'block',
      width: '100%',
      outLine: 'unset',
    },

    '& .MuiButtonBase-root': {
      minHeight: '36px',
      padding: '8px 20px 8px 20px',
      borderRadius: '22px',
      fontSize: '1.8rem',
      lineHeight: '1.5',
      fontFamily: "'SamsungOne'",
      fontWeight: 'bold',
      textTransform: 'unset',
    },

    '& .MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '2.2rem',
    },

    '& .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-wb57ya-MuiFormControl-root-MuiTextField-root':
      {
        margin: '10px 0',
      },
    '& .MuiInputBase-root-MuiInput-root:before': {
      borderBottom: '2px solid #000',
    },
    '& .MuiInputBase-root-MuiInput-root:after': {
      borderBottom: '2px solid #000',
    },

    '& .MuiMenuItem-root MuiMenuItem-gutters MuiButtonBase-root css-6talhg-MuiButtonBase-root-MuiMenuItem-root':
      {
        fontSize: '1.6rem',
      },
  },
}));
