import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
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
    '& .MuiBox-root': {
      padding: '0',
    },
  },
  headerWrapper: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '90px',
    backgroundColor: 'var(--white)',
  },

  headerInner: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 var(--default-layout-horizontal-spacer)',
    justifyContent: 'space-between',
    height: '100%',
    width: 'var(--default-layout-width, 1150px)',
  },

  headerLogo: {
    display: 'flex',
    alignItems: 'center',
  },

  headerLogoLink: {
    display: 'flex',
    width: '80px',
    '& img': {
      width: '100%',
      paddingTop: '2px',
      objectFit: 'cover',
    },
  },

  title: {
    fontSize: '2.7rem',
    margin: '12px 0 32px',
    color: '#252525',
    fontWeight: '600',
    lineHeight: 'normal',
  },

  form: {
    margin: '0 68px',
    minWidth: '236px',
    '& .MuiFormHelperText-root': {
      margin: '0 0 18px',
      fontSize: '1.2rem',
    },
  },

  paper: {
    position: 'absolute',

    left: '0',
    right: '0',
    padding: '60px 72px 60px 72px',
    height: '70vh',
    maxWidth: '640px',
    margin: '0 auto',
    backgroundColor: '#fcfcfc',
  },
}));
