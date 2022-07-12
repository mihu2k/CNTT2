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
    alignItems: 'center',
    gap: '32px',
    margin: '16px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      fontSize: '1.6rem',
    },
  },

  orderProductImg: {
    height: '100%',
    maxWidth: '200px',
    objectFit: 'cover',
  },

  orderProductInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem',
    },
  },

  orderProductName: {
    fontSize: '2.4rem',
    color: '#212738',
    fontFamily: 'var(--font-family-Two)',
  },

  
}));
