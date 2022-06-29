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

    '& .MuiButtonBase-root': {
      minHeight: '36px',
      padding: '8px 20px 8px 20px',
      borderRadius: '22px',
      fontSize: '17px',
      lineHeight: '1.6',
      fontFamily: "'SamsungOne'",
      fontWeight: '500',
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
  },

  //Invoive

  invoiceWrapper: {
    backgroundColor: '#f4f4f4',
    padding: '30px',
    height: '100%',
    borderRadius: '20px',
  },

  invoiceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  invoiceHeaderTitle: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },

  invoiceBody: {
    display: 'flex',
    flexDirection: 'column',
  },

  invoiceProductInfo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    gap: '30px',
    margin: '32px 0',
  },

  invoiceImg: {
    maxWidth: '113px',
    maxHeight: '113px',
  },

  invoiceInfo: {
    maxWidth: '245px',
    flex: '1',
  },
  invoiceInfoName: {
    fontFamily: 'var(--font-family-Two)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  invoiceInfoDesc: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    padding: '4px 0',
    whiteSpace: 'nowrap',
    overFlow: 'hidden',
    textOverflow: 'ellipsis',
  },

  cicle: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    backgroundColor: '#000',
    borderRadius: '50%',
  },

  invoiceInfoPrice: {
    fontWeight: 'bold',
    maxWidth: '100%',
  },

  moneyInfoList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.8rem',
    marginBottom: '20px',
    listStyleType: 'none',
    '&.detail': {
      paddingTop: '20px',
      borderTop: '1px solid #ddd',
    },
  },

  moneyInfo: {
    '&.lastDetail': {
      fontSize: '2.2rem',
      fontWeight: 'bold',
    },
  },

  moneyDetail: {
    color: '#000',
    fontSize: '2rem',

    fontWeight: 'bold',
  },

  moneyInfoDetailList: {},
}));
