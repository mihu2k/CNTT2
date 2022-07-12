import { useStyles } from './error-page.style';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import config from '~/config';
import images from '~/assets/images';
import routes from '~/config/routes-config';

function ErrorPage() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2 style={{ color: '#343434', fontSize: '3rem' }}>
        Rất tiếc! Trang này không tồn tại.
      </h2>
      <h1>404</h1>
      <p style={{ color: '#343434', fontSize: '1.8rem', letterSpacing: '0.1rem' }}>
        Trang bạn tìm có lỗi xảy ra hoặc không tồn tại, vui lòng thử lại sau!{' '}
      </p>
      <Link to={config.routes.home}>
        <Button variant="outlined">Trang chủ</Button>
      </Link>
    </div>
  );
}

export default ErrorPage;
