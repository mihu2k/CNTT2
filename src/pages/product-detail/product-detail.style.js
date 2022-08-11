import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const indentListItem = theme.spacing(4);

  return {
    root: {},
    wrapBreadcrumb: {
      padding: '24px 0',
      boxShadow: '0 1px 0 rgb(0 0 0 / 12%)',
      '& .MuiBreadcrumbs-root': {
        '& .MuiLink-root': {
          fontSize: '1.6rem',
        },
        '& .MuiTypography-root ': {
          fontSize: '1.6rem',
          fontWeight: 'bold',
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
      flex: 1,
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
        width: 'fit-content',
      },
    },
    prodName: {
      lineHeight: 1.3,
      [theme.breakpoints.down('sm')]: {
        paddingRight: '30px',
      },
    },
    wrapMainImg: {
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // border: '1px solid #ccc',
    },
    wrapQuantity: {
      alignItems: 'baseline',
      // justifyContent: 'space-around',
      margin: '32px 0',
      '& .MuiButtonBase-root.MuiIconButton-root': {
        minWidth: '38px',
        minHeight: '38px',
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    wrapInputQuantity: {
      '& .MuiOutlinedInput-root': {
        fontSize: '1.4rem',
        maxWidth: '52px',
        height: '100%',
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
      fontWeight: 'bold',
      fontSize: '26px',
      color: 'var(--primary-color)',
    },
    shortDesc: {
      // padding: '12px 0 12px 20px',
      padding: '16px 0 16px 16px',
      borderTop: '1px solid rgb(0 0 0 / 12%)',
      borderBottom: '1px solid rgb(0 0 0 / 12%)',
      fontSize: '1.6rem',
    },
    list: {
      paddingTop: 0,
    },
    wrapGuarantee: {
      paddingLeft: '16px',
      borderLeft: '1px solid rgb(0 0 0 / 12%)',
      maxWidth: '330px',
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
      letterSpacing: '0.03rem',
      '& .MuiTypography-root': {
        fontSize: '1.6rem',
      },
    },
    widthIcon: {
      minWidth: indentListItem,
      justifyContent: 'left',
      '& svg.MuiSvgIcon-root.MuiSvgIcon-colorPrimary.MuiSvgIcon-fontSizeLarge':
        {
          color: 'var(--primary-color)',
        },
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
