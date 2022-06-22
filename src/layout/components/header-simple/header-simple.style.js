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
    padding: '14px 0',
  },
}));
