import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  infoProfile: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
  },

  infoProfileAvatar: {
    width: '6.52777778vw',
    height: '6.52777778vw',
    position: 'relative',
    left: '0',
    top: '0',
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#eee',
    marginRight: '25px',

    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
    },
  },
  infoProfileAvatarIcon: {
    width: '1.9999999vw',
    height: '1.9999999vw',
    position: 'absolute',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translate(-50%,-50%)',
    transform: 'translate(-50%,-50%)',
    cursor: 'auto',

    [theme.breakpoints.down('sm')]: {
      width: '22px',
      height: '22px',
    },
  },

  infoProfileUser: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoUserName: {
    height: '32px',
    fontSize: '2.4rem',
    fontFamily: 'var(--font-family-Two)',
  },
  infoUserEmail: {
    padding: '10px 0',
  },

  infoUserLink: {
    padding: '10px 0',
    textDecoration: 'underline',
  },

  infoDashboardComer: {
    display: 'flex',
    width: '100%',
    minHeight: '140px',
    marginTop: '2.22222222vw',
    padding: '24px 0',
    borderRadius: '1.38888889vw',
    border: '1px solid #ccc',
  },

  infoDashboardAddress: {
    position: 'relative',
    flex: '1',
    padding: '0vw 1.66666667vw',

    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '0.5px',
      height: '90px',
      backgroundColor: '#ccc',
      right: '0',
      top: '50%',
      bottom: '0',
      transform: 'translateY(-50%)',
    },
  },

  dashboardAddressTitle: {
    height: '32px',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1.33',
  },

  addressUsername: {
    display: 'block',
    height: '19px',
    marginTop: '8px',
    fontSize: '1.4rem',
    lineHeight: '1.33',
    fontWeight: 'bold',
  },

  addressInfo: {
    fontSize: '1.4rem',
    lineHeight: '1.33',
    marginTop: '8px',
  },

  infoDashboardPayment: {
    flex: 1,
  },

  dashboardPaymentTitle: {
    height: '32px',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1.33',
    padding: '0vw 1.66666667vw',
  },

  PaymentNumber: {
    paddingRight: '10px',
  },

  dashboardPaymentInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0vw 1.66666667vw',
    marginTop: '8px',
  },
  PaymentIcon: {
    lineHeight: '0',
  },

  // panel

  shopInfoPanels: {
    display: 'flex',
    width: '100%',
    borderRadius: '1.38888889vw',
    backgroundColor: '#f7f7f7',
    margin: '24px 0 48px 0',
    [theme.breakpoints.down('lg')]: {
      margin: '120px 0',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: '30px 0',
    },
  },

  shopInfoBox: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '247px',
    padding: '24px 0',
    [theme.breakpoints.down('lg')]: {
      minHeight: '185px',
    },

    '&.separate': {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        borderBottom: '1px solid #ccc',
      },

      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '0.5px',
        height: '198px',
        backgroundColor: '#ccc',
        right: '0',
        top: '50%',
        bottom: '0',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('lg')]: {
          height: '150px',
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
  },

  shopInfoBoxIcon: {
    display: 'block',
    width: '36px',
    height: '36px',
  },

  shopInfoBoxTitle: {
    lineHeight: '65px',
    fontSize: '14px',
    fontWeight: 'bold',
  },

  shopInfoBoxNumber: {
    fontSize: '32px',
    lineHeight: '38px',
    fontWeight: 'bold',
    fontFamily: 'var(--font-familyTwo)',
  },
}));
