import { Typography } from '@mui/material';
import { formatDateTime } from '~/common/utils';
import { useStyles } from './order-header.style';
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
        className={classes.orderHeaderitems}
      >
        <Typography
          variant="div"
          component="div"
          className={classes.orderHeaderitem}
        >
          <span className={classes.orderHeaderInfo}>
            Mã đơn hàng:&nbsp;<span>{order?.code}</span>
          </span>
          <span className={classes.orderHeaderInfo}>
            Ngày đặt hàng:&nbsp;
            <span>{formatDateTime(order?.updated_at)}</span>
          </span>
          <span className={classes.orderHeaderInfo}>
            Tổng sản phẩm của đơn hàng:&nbsp;
            <span>{order?.products?.length}</span>
          </span>
        </Typography>
      </Typography>
    </div>
  );
}

export default OrderHeader;
