import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    flexDirection: 'column',
    padding: '8px 16px 20px',
  },
  wrapContent: {
    flex: 1,
    '& .MuiButton-root + .MuiButton-root': {
      marginLeft: '12px',
    },
  },
  textarea: {
    width: '100%',
    fontSize: '15px',
    fontFamily: 'SamsungOne, sans-serif',
    margin: '12px 0',
  },
}));
