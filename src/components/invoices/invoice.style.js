import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  
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
