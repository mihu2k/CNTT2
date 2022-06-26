import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'sticky',
      top: 8,
      padding: '16px 24px',
      borderRadius: '16px',
      backgroundColor: '#f7f7f7',
      '& .MuiListItemIcon-root': {
        minWidth: 40,
        '&.item-payment-icon': {
          minWidth: 24,
        },
      },
      '& .MuiButton-root.MuiButton-contained': {
        padding: '7px 24px',
        borderRadius: 999,
      },
    },
    wrapPrice: {
      margin: '72px 0',
    },
  };
});
