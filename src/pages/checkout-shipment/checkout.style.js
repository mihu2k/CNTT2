import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '32px',
  },

  stepsContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    margin: '8px 0 32px 0',
    '& .MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel.css-10mg1vw-MuiStepper-root':
      {
        height: '76px',
      },
    '& .MuiStep-root': {
      minWidth: '180px',
      height: '100%',
      margin: '8px',
      cursor: 'default',
    },

    '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root':
      {
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

    '& span.MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel.css-77k407-MuiStepLabel-label':
      {
        fontWeight: '700',
      },
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
      '&:hover': {
        borderColor: '#2189ff',
        backgroundColor: '#2189ff',
      },
    },
  },
}));
