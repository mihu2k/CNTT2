// import { useStyles } from './order-item.style';
import { Typography } from '@mui/material';

import OrderBody from '~/components/order-items/order-body';
import OrderHeader from '~/components/order-items/order-header';

// import cx from 'classnames';

function OrderItem() {
  // const classes = useStyles();
  return (
    <Typography
      variant="div"
      component="div"
      sx={{
        padding: '24px',
        borderRadius: '20px',
        border: '1px solid #ddd',
        margin: '24px 0',
      }}
    >
      <OrderHeader />
      <OrderBody separate />
    </Typography>
  );
}

export default OrderItem;
