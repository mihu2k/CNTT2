import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const height = 80;

  return {
    box: {
      // marginBottom: '24px',
      padding: '32px 0',
      boxShadow: '0 1px 0 rgb(0 0 0 / 12%)',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    imgProd: {
      width: 80,
      height,
      borderRadius: '4px',
      marginRight: '26px',
    },
    wrapInfo: {
      flex: 1,
    },
    info: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    action: {
      justifyContent: 'space-between',
    },
  };
});
