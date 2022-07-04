import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '0 16px',
    minHeight: '64px',
    minWidth: '320px',
  },
  headerLogo: {
    height: '64px',
    width: 'auto',
    marginTop: '8px',
    padding: '14px 0',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },

  headerText: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    gap: '5px',
    [theme.breakpoints.down('sm')]: {},
  },

  backBtn: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));
