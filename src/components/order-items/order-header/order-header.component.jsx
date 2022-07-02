import { useStyles } from './order-header.style';
import { Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import config from '~/config';

// import cx from 'classnames';

function OrderHeader() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography
        variant="div"
        component="div"
        className={classes.orderHeaderitems}
      >
        <Typography
          variant="div"
          component="div"
          className={classes.orderHeaderitem}
        >
          <span className={classes.orderHeaderInfo}>
            Mã đơn hàng: <span>Rene001</span>
          </span>
          <span className={classes.orderHeaderInfo}>
            Ngày đặt hàng: <span>29/06/2022</span>
          </span>
          <span className={classes.orderHeaderInfo}>
            Tổng số lượng sản phẩm của đơn hàng <span>2</span>
          </span>
        </Typography>
      </Typography>
    </div>
  );
}

export default OrderHeader;
