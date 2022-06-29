import { useStyles } from './header-simple.style';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// import image from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import cx from 'classnames';
import images from '~/assets/images';

function HeaderSimple() {
  const classes = useStyles();

  return (
    <header className={cx(classes.header, 'grid wide')}>
      <Link to={config.routes.product}>
        <Typography
          display={'flex'}
          alignItems={'center'}
          fontWeight={'bold'}
          variant="span"
          component="span"
        >
          <ArrowBackIosIcon />
          Tiếp tục mua hàng
        </Typography>
      </Link>
      <Link to={config.routes.home}>
        <img className={classes.headerLogo} src={images.logo} alt="logo" />
      </Link>
      <Typography
        display={'flex'}
        alignItems={'center'}
        fontWeight={'bold'}
        gap={'5px'}
        variant="div"
        component="div"
      >
        <LocalPhoneIcon />
        Hỗ trợ: 19006017
      </Typography>
    </header>
  );
}

export default HeaderSimple;
