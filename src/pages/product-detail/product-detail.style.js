import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const indentListItem = theme.spacing(4);

  return {
    root: {},
    wrapBreadcrumb: {
      padding: '24px 0',
      borderBottom: '1px solid #ccc',
      '& .MuiBreadcrumbs-root': {
        '& .MuiLink-root': {
          fontSize: '1.6rem',
        },
        '& .MuiTypography-root ': {
          fontSize: '1.6rem',
        },
      },
    },
    wrapMainInfo: {
      marginTop: '24px',
      '& .MuiBox-root': {
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '& .MuiButton-root': {
          flex: 1,
          minWidth: 'fit-content',
          fontSize: '1.6rem',
          textTransform: 'capitalize',
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          boxShadowColor: 'var(--primary-color)',
          padding: '10px 0',
          borderRadius: '26px',
          fontWeight: 'bold',

          [theme.breakpoints.down('lg')]: {
            minWidth: '100%',
          },
        },
        '& .MuiButton-root + .MuiButton-root': {
          marginLeft: '16px',
          color: 'var(--primary-color)',
          backgroundColor: '#fff',

          [theme.breakpoints.down('lg')]: {
            margin: '24px 0',
          },
        },
      },
    },

    mainInfoContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
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
      width: '416px',
      flexShrink: 0,
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
      [theme.breakpoints.down('sm')]: {
        padding: '20px 20px 20px 0',
      },
    },
    prodName: {
      lineHeight: 1.3,
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
      // justifyContent: 'space-around',
      margin: '32px 0',
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
    list: {
      marginLeft: '16px',
      paddingTop: 0,
    },
    wrapGuarantee: {
      paddingLeft: '10px',
      borderLeft: '1px solid #ccc',
      '& .MuiListItemIcon-root + .MuiListItemText-root': {
        '& .MuiTypography-root': {
          fontWeight: 600,
        },
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    text: {
      '& .MuiTypography-root': {
        fontSize: '1.6rem',
      },
    },
    widthIcon: {
      minWidth: indentListItem,
      justifyContent: 'center',
    },
    indentListItem: {
      paddingLeft: indentListItem,
    },
    wrapProdDetail: {
      margin: '60px 0',
    },

    showMoreBtn: {
      '&.MuiButton-root': {
        color: 'var(--primary-color)',
        height: '40px',
        fontSize: '1.6rem',
        minWidth: '113px',
        fontWeight: '500',
        borderRadius: '20px',
        textTransform: 'inherit',
        backgroundColor: 'transparent!important',
      },
    },
  };
});
