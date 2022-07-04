import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'sticky',
      top: 8,
      padding: '30px',
      borderRadius: '16px',
      backgroundColor: '#f4f4f4',
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
      marginTop: '62px',
      gap: '10px',
      [theme.breakpoints.only('md')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    nextButtonWrap: {
      display: 'flex',
      marginTop: '62px',
      width: '100%',
      [theme.breakpoints.only('sm')]: {
        justifyContent: 'flex-end',
      },
    },

    nextButton: {
      '&.MuiButtonBase-root': {
        backgroundColor: 'var(--primary-color)',
        fontWeight: 'bold',

        [theme.breakpoints.only('sm')]: {
          position: 'relative',
          width: '30%',
        },
      },
    },
  };
});
