import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  settingPageTitle: {
    display: 'block',
    textAlign: 'center',
    padding: '30px 0',
    textTransform: 'uppercase',
    [theme.breakpoints.down('lg')]: {
      margin: '160px 0 101px 0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  infoDashboardComer: {
    display: 'flex',
    width: '100%',
    minHeight: '140px',
    marginTop: '2.22222222vw',
    padding: '1.66666667vw 0vw',
    margin: '32px 0 64px 0',
    borderRadius: '1.38888889vw',
    border: '1px solid #ccc',
    [theme.breakpoints.down('lg')]: {
      gap: '30px',
      flexDirection: 'column',
      margin: '80px 0 120px 0',
      padding: '36px 0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '32px 0 64px 0',
      padding: '24px',
    },
  },

  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
    },
  },

  dashboardEdit: {
    cursor: 'pointer',
  },

  infoDashboardAddress: {
    position: 'relative',
    flex: '1',
    padding: '0vw 1.66666667vw',

    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '0.5px',
      height: '100%',
      backgroundColor: '#ccc',
      right: '0',
      top: '50%',
      bottom: '0',
      transform: 'translateY(-50%)',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  },

  dashboardAddressTitle: {
    height: '32px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    lineHeight: '1.33',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.2rem',
    },
  },

  addressUsername: {
    display: 'block',
    height: '19px',
    marginTop: '8px',
    fontSize: '1.4rem',
    lineHeight: '1.33',
    fontWeight: 'bold',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
    },
  },

  addressInfo: {
    fontSize: '1.4rem',
    lineHeight: '1.33',
    marginTop: '8px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
    },
  },

  infoDashboardPayment: {
    flex: 1,
    padding: '0vw 1.66666667vw',
  },

  dashboardPaymentTitle: {
    height: '32px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    lineHeight: '1.33',
    // padding: '0vw 1.66666667vw',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.2rem',
    },
  },

  PaymentNumber: {
    paddingRight: '10px',
  },

  dashboardPaymentInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding: '0vw 1.66666667vw',
    marginTop: '8px',
  },
  PaymentIcon: {
    lineHeight: '0',
  },

  // modal input
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '2.2rem',
    fontFamily: 'var(--font-family-Two)',
  },
  modalContainer: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },

  modalForm: {
    '& .MuiPaper-root': {
      height: 'fit-content',
      borderRadius: '0',
      borderBottomRightRadius: '26px',
      borderBottomLeftRadius: '26px',
    },

    '& label#demo-simple-select-label': {
      marginBottom: '-20px',
    },

    '& .MuiInputLabel-root': {
      fontSize: '1.6rem',
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
  modalButton: {
    border: '1px solid #000',
    flex: '1',
    boxShadow: 'none',
    margin: '10px 10px 0 10px',

    '&:hover': {
      borderColor: '#000',
    },
    '& + &:hover': {
      boxShadow: 'none',
      backgroundColor: '#000',
      opacity: 0.8,
    },
  },
}));
