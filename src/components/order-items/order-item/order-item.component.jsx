import { useStyles } from './order-item.style';
import { Typography } from '@mui/material';

import OrderHeader from '~/components/order-items/order-header';
import OrderBody from '~/components/order-items/order-body';
import OrderUserInfo from '~/components/order-items/order-user-info';

// import cx from 'classnames';

function OrderItem({ order }) {
  const classes = useStyles();

  return (
    <Typography variant="div" component="div" className={classes.orderItem}>
      <OrderHeader order={order} />
      <OrderBody separate />
      <OrderUserInfo />
    </Typography>
  );
}

export default OrderItem;
