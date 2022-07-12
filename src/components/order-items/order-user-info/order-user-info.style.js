import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderTop: '1px solid #ddd',
  },
  orderUserInfoWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10px',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  orderUserInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  userInfoTitle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      margin: '24px 0 0 0',
      textAlign: 'center',
    },
  },

  orderPaymentMethodInfo: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  orderProductStatus: {
    color: '#006ff2',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '1.6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },

  totalPrice: {
    fontWeight: 'bold',
    fontSize: '1.7rem',
  },
}));
