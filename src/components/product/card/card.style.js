import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 24px 36px',
    margin: '2px 0',
    maxWidth: '320px',
    borderRadius: '1.38888889vw',
    boxShadow: 'none',
    border: '2px solid #f7f7f7',
    '& .MuiButton-root': {
      fontSize: '1.4rem',
      textTransform: 'initial',
      fontFamily: 'var(--font-family-One)',
      borderRadius: '20px',
      fontWeight: 600,
      minWidth: '160px',
      backgroundColor: '#000',
    },
    '& .MuiButton-root + .MuiButton-root': {
      margin: '12px 0 0 0',
      border: '1px solid #000',
      color: '#000',
      backgroundColor: '#fff',
    },
  },

  wrapAccordion: {
    boxShadow: 'none',
  },

  wrapImgProd: {
    width: '100%',
    flexShrink: 0,
    textAlign: 'center',
    paddingBottom: '12px',
  },
  imgProd: {
    display: 'inline-block !important',
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  prodName: {
    fontFamily: 'var(--font-family-Two)',
    lineHeight: 1.5,
  },
  wrapColor: {
    fontSize: '1.2rem',
    margin: '12px 0',
  },
  wrapChooseColor: {
    marginTop: '8px',
    '& .boxChooseColor + .boxChooseColor': {
      marginLeft: '14px',
    },
    '& .boxChooseColor': {
      display: 'inline-flex',
    },
  },
  wrapPrice: {
    margin: '24px 0',
    fontSize: '1.8rem',
    fontWeight: 600,
  },
  wrapCircleBox: {
    width: '23px',
    height: '23px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBox: {
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
