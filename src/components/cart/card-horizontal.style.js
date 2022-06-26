import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const height = 80;

  return {
    box: {
      // marginBottom: '24px',
      padding: '32px 0',
      borderBottom: '1px solid #ccc',
    },
    imgProd: {
      width: 80,
      height,
      borderRadius: '4px',
    },
    wrapInfo: {
      flex: 1,
      marginLeft: '40px',
    },
    info: {
      justifyContent: 'space-between',
      height,
    },
    action: {
      justifyContent: 'space-between',
    },
  };
});
