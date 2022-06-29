import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  list: {
    listStyle: 'none',
    padding: '16px',
  },
  item: {
    marginBottom: '16px',
  },
  wrapInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapInfoLeft: {
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '1.6rem',
    },
  },
  content: {
    textAlign: 'justify',
    fontSize: '1.5rem',
    marginTop: '16px',
  },
}));
