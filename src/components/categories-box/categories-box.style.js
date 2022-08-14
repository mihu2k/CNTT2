import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  sectionHomeBoxes: {
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'center',
    height: '450px',
    padding: '32px 0',
    margin: '0 -156px 0 -155px',
    [theme.breakpoints.down('lg')]: {
      margin: '0',
      height: '308px',
      width: '100%',
    },

    [theme.breakpoints.down('md')]: {
      height: '244px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },

  sectionBox: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    cursor: 'pointer',

    '&:hover sectionBoxImg': {
      filter: 'brightness(100%)',
    },
  },

  sectionBoxImg: {
    height: '100%',
    filter: 'brightness(50%)',
    transition: 'all 2s',
    verticalAlign: 'middle',
    '&:hover': {
      filter: 'brightness(100%)',
      transform: 'scale(1.1)',
      overflow: 'hidden',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },

  sectionBoxTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
    textShadow: '0 0 2px #000',
    zIndex: '11',

    '&:hover + .box-transform': {
      filter: 'brightness(100%)',
      transform: 'scale(1.1)',
      overflow: 'hidden',
    },

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
}));
