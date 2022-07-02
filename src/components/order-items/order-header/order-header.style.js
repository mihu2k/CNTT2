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
  },
  orderHeaderInfo: {
    paddingRight: '10px',
    borderRight: '2px solid #ddd',
  },
}));
