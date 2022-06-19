import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},
  wrapBreadcrumb: {
    padding: '24px 0',
    borderBottom: '1px solid #ccc',
    '& .MuiBreadcrumbs-root': {
      '& .MuiLink-root': {
        fontSize: '1.4rem',
      },
    },
  },
  wrapMainInfo: {
    marginTop: '24px',
    '& .MuiBox-root': {
      '& .MuiButton-root': {
        flex: 1,
        borderRadius: '2px',
        minWidth: 'fit-content',
        fontSize: '1.6rem',
        textTransform: 'capitalize',
      },
      '& .MuiButton-root + .MuiButton-root': {
        marginLeft: '16px',
      },
    },
  },
  // imgSlider: {
  //   border: '1px solid #ccc',
  //   marginRight: '12px',
  //   // display: 'block',
  //   width: '80px',
  //   height: '80px',
  // },
  wrapImgAndSlide: {
    width: '400px',
    '& .slick-slider': {
      '& .slick-arrow': {
        margin: '0 36px',
        color: '#333',
        fontSize: '20px',
        width: '24px',
        height: '24px',
        backgroundColor: '#ccc',
        '&:before': {
          color: '#b4b4b4',
        },
        '&:hover': {
          backgroundColor: '#ccc',
        },
      },
    },
  },
  wrapMainImg: {
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
  },
  wrapQuantity: {
    alignItems: 'center',
    '& .MuiButtonBase-root.MuiIconButton-root': {
      minWidth: '36px',
    },
  },
  wrapInputQuantity: {
    '& .MuiOutlinedInput-root': {
      fontSize: '1.4rem',
      maxWidth: '52px',
      '& .MuiOutlinedInput-input': {
        textAlign: 'center',
        padding: '8px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        borderRadius: 0,
      },
    },
  },
  price: {
    fontWeight: 600,
    fontSize: '20px',
  },
  shortDesc: {
    padding: '12px 0 12px 20px',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    fontSize: '1.4rem',
  },
}));
