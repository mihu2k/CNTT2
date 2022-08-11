import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '32px',

    '& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4':
      {
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
    '& .MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel':
      {
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

    '& svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root':
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

    '& span.MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
      {
        fontWeight: '700',
      },

    '& .MuiStepConnector-line.MuiStepConnector-lineHorizontal': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
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

    '& .MuiButtonBase-root': {
      height: '40px',
      minWidth: '153px',
      backgroundColor: '#2189ff',
      color: '#fff',
      fontSize: '1.4rem',
      lineHeight: '1.33',
      border: '0',
      padding: '10px 0',
      borderRadius: '24px',
      fontWeight: '700',
      [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
      },
    },

    '& .MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '2.2rem',
    },

    '& .MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root':
      {
        margin: '10px 0',
      },
    '& .MuiInputBase-root-MuiInput-root:before': {
      borderBottom: '2px solid #000',
    },
    '& .MuiInputBase-root-MuiInput-root:after': {
      borderBottom: '2px solid #000',
    },

    '& .MuiMenuItem-root.MuiMenuItem-gutters.MuiButtonBase-root':
      {
        fontSize: '1.6rem',
      },
  },

  //Accordion
  paymentFormHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accordionWrapper: {
    padding: '26px 24px 27px',
    marginBottom: '20px',
  },

  accordionBtn: {
    '& .MuiButtonBase-root': {
      height: '40px',
      minWidth: '153px',
      backgroundColor: '#2189ff',
      color: '#fff',
      fontSize: '1.4rem',
      lineHeight: '1.33',
      border: '0',
      padding: '10px 0',
      borderRadius: '24px',
      fontWeight: '700',
      [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
      },
    },
  },

  accordionHeader: {
    display: 'flex',
    alignItem: 'center',
    gap: '8px',
    fontWeight: 'bold',
  },

  accordionTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.8rem',
  },

  accordionContent: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.6rem',
    gap: '20px',
    color: '#000',
  },

  paymentImgCard: {
    maxWidth: '120px',
    maxHeight: '32px',
    marginRight: '6px',
  },
}));
