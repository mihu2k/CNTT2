import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '16px 0 32px 0',
    '& + .separate': {
      borderTop: '1px solid #ddd',
    },
  },
  orderBody: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '16px 0',
  },

  orderProductImg: {
    height: '100%',
    maxWidth: '164px',
    objectFit: 'cover',
  },

  orderProductInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.5rem',
  },

  orderProductName: {
    fontSize: '2.4rem',
    color: '#212738',
    fontFamily: 'var(--font-family-Two)',
  },

  orderProductStatus: {
    color: '#006ff2',
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '1.6rem',
  },

  orderProductShipmentInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    fontWeight: 'bold',
    gap: '10px',
  },
  orderShipmentInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.5rem',
  },
  orderShipmentInfoTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '20px 0 0 0',
  },
}));
