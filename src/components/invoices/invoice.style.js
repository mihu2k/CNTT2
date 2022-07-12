import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
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
    overflowY: 'scroll',
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
}));
