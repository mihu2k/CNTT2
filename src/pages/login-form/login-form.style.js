import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#f2f2f2',
    '& .MuiTabs-flexContainer': {
      maxWidth: '640px',
      minHeight: '80px',
      paddingTop: '50px',
      margin: '48px auto 0 auto',
      backgroundColor: '#fff',
      borderTopRightRadius: '26px',
      borderTopLeftRadius: '26px',
      justifyContent: 'center',
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
