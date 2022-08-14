import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '32px',

    '& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4': {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
      },
    },
  },
  stepsContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    margin: '8px 0 32px 0',
    '& .MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel': {
      height: '76px',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        flexDirection: 'column',
      },
    },
    '& .MuiStep-root': {
      minWidth: '180px',
      height: '100%',
      margin: '8px',
      cursor: 'default',
    },

    '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root': {
      fontSize: '2.4rem',
    },
    '& .MuiStepIcon-text': {
      fontSize: '1.2rem',
      fontFamily: 'var(--font-family-Two)',
      fontWeight: '700',
      fontStretch: 'normal',
      lineHeight: '1.33',
      textAlign: 'center',
    },

    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
      fontSize: '1.5rem',
      fontStretch: 'normal',
      lineHeight: '1.33',
      textAlign: 'center',
      color: '#000',
    },

    '& span.MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
      fontWeight: '700',
    },

    '& .MuiStepConnector-line.MuiStepConnector-lineHorizontal': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
  '.MuiTypography-root.MuiTypography-h1': {
    marginBottom: '10px',
  },
  checkoutInfoForm: {
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

    '& .MuiOutlinedInput-input.MuiInputBase-input': {
      width: '92%',
    },

    '& .MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '2.2rem',
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
  },
  shipmentFormBtn: {
    display: 'flex',
    justifyContent: 'flex-start',
    minHeight: '45px',
    width: '100%',
    margin: '32px 0',
    textDecoration: 'uppercase',
    paddingTop: '12px',
    '& .MuiButtonBase-root': {
      color: '#fff',
      backgroundColor: '#2189ff',
      maxWidth: '30%',
      height: '100%',
      padding: '10px 0',
      borderRadius: '24px',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      textDecoration: 'uppercase',

      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
      '&:hover': {
        borderColor: '#2189ff',
        backgroundColor: '#2189ff',
      },
    },
  },
  formInfoAddressWrap: {
    flexDirection: 'initial!important',
  },
  formInfoAddress: {
    marginTop: '32px!important',
  },
  infoAddress: {
    fontSize: '1.6rem!important',
  },
}));
