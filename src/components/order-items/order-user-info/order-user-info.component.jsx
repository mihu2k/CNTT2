import { Typography } from '@mui/material';
import { numberWithCommas, showTextOrderStatus } from '~/common/utils';

import { useStyles } from './order-user-info.style';
// import { Link } from 'react-router-dom';
// import config from '~/config';

// import cx from 'classnames';

export default function OrderUserInfo({ order }) {
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
          <p className={classes.userInfoTitle}>
            Thông tin&nbsp;
            {order?.shipMethod === 0 ? 'vận chuyển' : 'khách hàng'}
          </p>
          <p>{order?.fullName}</p>
          <p>{order?.phone}</p>
          <p>{order?.email}</p>
          <p>{order?.deliveryAddress}</p>
        </Typography>
        <Typography
          variant="div"
          component="div"
          className={classes.orderUserInfo}
        >
          <p className={classes.userInfoTitle}>Phương thức thanh toán</p>
          <p className={classes.orderPaymentMethodInfo}>
            {order?.paymentMethod === 2
              ? 'Thanh toán tiền mặt'
              : order?.paymentMethod === 1
              ? 'Thanh toán ATM/QR/Ví điện tử'
              : 'Thanh toán thẻ quốc tế VISA'}
          </p>
        </Typography>
        <Typography
          variant="div"
          component="div"
          className={classes.orderUserInfo}
        >
          <p>
            Tổng đơn hàng:&nbsp;
            <span className={classes.totalPrice}>
              {numberWithCommas(
                order?.products?.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0,
                ),
              )}
              &nbsp;&#8363;
            </span>
          </p>
          {/* <p>
            Ship từ:&nbsp;<span>20/06/2022</span>&nbsp;
            <span>Giao hàng nhanh</span>
          </p> */}
          <p>
            Phí vận chuyển:&nbsp;<span>Free</span>
          </p>
          <p className={classes.orderProductStatus}>
            {showTextOrderStatus(order?.shipMethod, order?.status)}
          </p>
        </Typography>
      </Typography>
    </div>
  );
}
