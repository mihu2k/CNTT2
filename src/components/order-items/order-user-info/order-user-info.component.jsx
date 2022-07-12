import { Typography } from '@mui/material';

import { useStyles } from './order-user-info.style';
// import { Link } from 'react-router-dom';
// import config from '~/config';

// import cx from 'classnames';

function OrderHeader({ order }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography
        variant="div"
        component="div"
        className={classes.orderUserInfoWrap}
      >
        <Typography
          variant="div"
          component="div"
          className={classes.orderUserInfo}
        >
          <p className={classes.userInfoTitle}>Thông tin vận chuyển</p>
          <p>Phạm Quốc Vương</p>
          <p>0369830702</p>
          <p>Vuongnguyen30702@gmail.com</p>
          <p>
            200/12/6, đường Lê Văn Lương, phường Tân Hưng, Quận 7, Thành phố Hồ
            Chí Minh
          </p>
        </Typography>
        <Typography
          variant="div"
          component="div"
          className={classes.orderUserInfo}
        >
          <p className={classes.userInfoTitle}>Phương thức thanh toán</p>

          <p className={classes.orderPaymentMethodInfo}>Thanh toán tiền mặt</p>
        </Typography>
        <Typography
          variant="div"
          component="div"
          className={classes.orderUserInfo}
        >
          <p>
            Tổng đơn hàng:
            <span className={classes.totalPrice}> 2.600.000 đ</span>
          </p>
          <p>
            Ship từ: <span>20/06/2022</span> <span>Giao hàng nhanh</span>
          </p>
          <p>
            Phí vận chuyển: <span>Free</span>
          </p>
          <p className={classes.orderProductStatus}>Đang xử lý</p>
        </Typography>
      </Typography>
    </div>
  );
}

export default OrderHeader;
