import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '80vh',
    margin: '0 -153px 0 -165px',

    [theme.breakpoints.down('lg')]: {
      minHeight: '40vh',
      margin: '0 -153px',
    },
  },

  sliderImage: {
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '40vh',
    },
  },

  sliderButton: {
    position: 'absolute',
    right: '40px',
    top: '75%',
    color: '#fff',
    margin: '20px',
    border: '1px solid #fff',
    fontSize: '1.4rem',
    zIndex: '10',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },

  sectionBanner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: '28px 0',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start',
    },
  },

  bannerItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.6rem',
    gap: '10px',
    width: '250px',
    lineHeight: '1',
    padding: '0 10px',

    '&.separate': {
      borderRight: '1px solid #7b7b7b',
      [theme.breakpoints.down('md')]: {
        borderRight: 'none',
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },

  bannerIcon: {
    fontSize: '2.8rem',
  },
  sectionTitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '16px',
    paddingTop: '32px',
    fontSize: '2rem',
  },

  bannerText: {
    [theme.breakpoints.down('md')]: {
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '1.8rem',
      width: '100%',
    },
  },

  sectionBestSeller: {
    paddingBottom: '32px',
  },

  sectionNewProducts: {
    paddingBottom: '32px',
    backgroundColor: '#f7f7f7',
    borderRadius: '1.38888889vw',
    [theme.breakpoints.down('lg')]: {
      backgroundColor: '#fff',
    },
  },

  sectionProducts: {
    paddingTop: '32px',
    textAlign: 'center',
    '& .slick-list': {
      marginLeft: '68px',
      [theme.breakpoints.down('lg')]: {
        marginLeft: '0',
      },
    },

    '& .MuiGrid-root>.MuiGrid-item': {
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
    },
  },

  sectionDetails: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '32px',

    '& .MuiButtonBase-root': {
      display: 'block',
      minWidth: '113px',
      height: '40px',
      borderRadius: '20px',
      backgroundColor: 'transparent!important',
      color: 'var(--primary-color)',
      fontSize: '16px',
      border: '1px solid var(--primary-color)',
      textTransform: 'inherit',
      fontWeight: '500',
    },
  },

  sectionHomeBoxs: {
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'center',
    height: '450px',
    padding: '32px  0',
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
