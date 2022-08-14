import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: '32px',
  },

  successContainer: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },

  successIcon: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  headingInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.8rem',
  },
  headingStoreName: {
    fontSize: '3rem',
    color: '#333',
    fontWeight: '700',
  },

  orderInfoLink: {
    display: 'inline-block',
    color: '#333',
    fontWeight: '700',
    textDecoration: 'underline',
  },

  orderInfoTable: {
    width: '100%',
    border: '1px solid #e4e4e4',
    borderRadius: '20px',
    padding: '30px',
    margin: '32px 0',
  },

  stepsContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    margin: '8px 0 32px 0',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    '& .MuiStepper-root.MuiStepper-horizontal.MuiStepper-alternativeLabel':
      {
        height: '76px',
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
      marginTop: '10px',
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
  },

  //Invoive

  invoiceWrapper: {
    backgroundColor: '#f4f4f4',
    padding: '30px 28px',
    height: '100%',
    minHeight: '680px',
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
  invoiceProductInfoWrap: {
    width: '100%',
    maxHeight: '320px',
    [theme.breakpoints.down('sm')]: {
      overflowY: 'scroll',
    },
  },

  invoiceProductBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },

  invoiceProductInfo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    margin: '24px 0 0 0',
  },

  invoiceImg: {
    maxWidth: '113px',
    maxHeight: '113px',
  },

  invoiceInfo: {
    maxWidth: '200px',
    flex: '1',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '240px',
    },
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
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between',
    },
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
    [theme.breakpoints.only('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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
  backToShopBtn: {
    display: 'block',
    minHeight: '45px',
    padding: '32px 0',
    '& .MuiButtonBase-root': {
      color: '#fff',
      backgroundColor: '#2189ff',
      minWidth: '100%',
      height: '100%',
      padding: '10px 0',
      borderRadius: '24px',
      fontSize: '1.4rem',
      fontWeight: 'bold',
      '&:hover': {
        borderColor: '#2189ff',
        backgroundColor: '#2189ff',
      },
    },
  },
}));
