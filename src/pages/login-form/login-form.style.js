import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#f2f2f2',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
    },
    '& .MuiTabs-flexContainer': {
      maxWidth: '580px',
      minHeight: '80px',
      paddingTop: '30px',
      margin: '48px auto 0 auto',
      backgroundColor: '#fff',
      borderTopRightRadius: '26px',
      borderTopLeftRadius: '26px',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        margin: '0',
      },
    },

    '& .MuiTab-root': {
      fontSize: '1.6rem',
      color: '#252525',
      padding: '0 20px',
    },
    '& .MuiBox-root': {
      padding: '0',
    },
  },
}));
