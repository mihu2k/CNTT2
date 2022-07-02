import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#f2f2f2',
    minHeight: '120vh',
    '& .MuiPaper-root': {
      marginTop: 'var(--default-layout-header-height)',
      height: 'fit-content',
      borderRadius: '26px',
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
      fontSize: '17px',
      lineHeight: '1.6',
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

    '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    '& .MuiGrid-root.css-vj1n65-MuiGrid-root': {
      margin: '0 68px 0 68px',
      minWidth: '236px',
    },
  },

  heading: {
    fontSize: '3rem',
    marginBottom: '32px',
    color: '#252525',
    fontWeight: 'bold',
    lineHeight: 'normal',
  },

  form: {
    '& .MuiInputBase-root-MuiInput-root:before': {
      borderBottom: '2px solid #000',
    },
    '& .MuiInputBase-root-MuiInput-root:after': {
      borderBottom: '2px solid #000',
    },
  },

  mainButton: {
    '&.MuiButtonBase-root': {
      color: '#fff',
      backgroundColor: '#0381fe',
      border: '1px solid #0381fe',
      margin: '27px 0 0 0',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },
  backButton: {
    '&.MuiButtonBase-root': {
      color: '#0381fe',
      backgroundColor: 'fff',
      border: '1px solid #0381fe',
      margin: '27px 0 0 0',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '64px 0',
    height: '70vh',
    maxWidth: '580px',
    margin: '0 auto',
    backgroundColor: '#fcfcfc',
  },
}));
