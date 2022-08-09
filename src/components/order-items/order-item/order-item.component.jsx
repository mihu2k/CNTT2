import { useStyles } from './order-item.style';
import { Typography } from '@mui/material';

import OrderHeader from '~/components/order-items/order-header';
import OrderBody from '~/components/order-items/order-body';
import OrderUserInfo from '~/components/order-items/order-user-info';

// import cx from 'classnames';

function OrderItem({ order }) {
  const classes = useStyles();

  // console.log(order, 'ORDER-----------------------------------------');

  return (
    <Typography variant="div" component="div" className={classes.orderItem}>
      <OrderHeader order={order} />
      {order?.products?.map((product) => (
        <OrderBody key={product?._id} separate product={product} />
      ))}
      <OrderUserInfo order={order} />
    </Typography>
  );
}

export default OrderItem;
