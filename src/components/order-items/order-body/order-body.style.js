import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '16px 0 32px 0',
    '& + .separate': {
      borderTop: '1px solid #ddd',
    },
  },

  orderProductImg: {
    height: '100%',
    maxWidth: '164px',
    objectFit: 'cover',
  },
}));
