import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  orderHeaderitems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#212738',
  },

  orderHeaderitem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    maxHeight: '15px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      fontSize: '1.4rem',
      height: 'auto',
      width: '100%',
      justifyContent: 'center',
      margin: '24px 0',
    },
  },
  orderHeaderInfo: {
    paddingRight: '10px',
    borderRight: '2px solid #ddd',
    [theme.breakpoints.down('sm')]: {
      borderRight: 'unset',
    },
  },
}));
