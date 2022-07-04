import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 24px 48px',
    margin: '2px 0',
    maxWidth: '320px',
    borderRadius: '20px',
    boxShadow: 'none',
    border: '2px solid #f7f7f7',
    '& .MuiButton-root': {
      fontSize: '1.4rem',
      textTransform: 'initial',
      fontFamily: 'var(--font-family-One)',
      borderRadius: '20px',
      fontWeight: 600,
      minWidth: '160px',
      backgroundColor: 'var(--primary-color)',
    },
    '& .MuiButton-root + .MuiButton-root': {
      margin: '12px 0 0 0',
      border: '1px solid var(--primary-color)',
      color: 'var(--primary-color)',
      backgroundColor: '#fff',
    },

    [theme.breakpoints.down('md')]: {
      border: '1px solid #ddd',
    },
  },

  wrapAccordion: {
    boxShadow: 'none',
  },

  imgProd: {
    alignSelf: 'center',
    flexShrink: 0,
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  prodName: {
    fontFamily: 'var(--font-family-Two)',
  },
  wrapColor: {
    fontSize: '1.2rem',
    margin: '12px 0',
  },
  wrapChooseColor: {
    marginTop: '8px',
  },
  wrapPrice: {
    margin: '24px 0',
    fontSize: '1.8rem',
    fontWeight: 600,
  },
  circleBox: {
    display: 'inline-block',

    width: '18px',
    height: '18px',
    borderRadius: 999,
    backgroundColor: '#00ffce',
    border: '1px solid #a1a1a1',
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    padding: '12px 0 0 0',
    borderTop: '1px solid #ccc',
  },
}));
