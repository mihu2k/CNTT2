import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  return {
    wrapInputQuantity: {
      '& .MuiOutlinedInput-root': {
        fontSize: '1.4rem',
        maxWidth: '52px',
        '& .MuiOutlinedInput-input': {
          textAlign: 'center',
          padding: '8px',
        },
        '& .MuiOutlinedInput-input + .MuiOutlinedInput-notchedOutline': {
          border: 'none',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
          borderRadius: 0,
        },
      },
    },
  };
});
