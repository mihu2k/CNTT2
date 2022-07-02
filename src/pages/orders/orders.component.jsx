import { useStyles } from './orders.style';
import { Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '~/config';
import OrderItem from '~/components/order-items/order-item';

import cx from 'classnames';

function Order() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Mã đơn hàng</h1>

      <Typography
        fontSize="1.5rem"
        fontWeight="400"
        textAlign="center"
        variant="p"
        component="p"
      >
        Nếu bạn đã có René account, vui lòng đăng nhập để theo dõi đơn hàng. Nếu
        chưa có René account, bạn có thể điền thông tin vào bảng dưới đây để tra
        cứu.
      </Typography>

      <Typography variant="div" component="div" className={classes.searchOrder}>
        <TextField
          id="standard-basic"
          label="Mã đơn hàng"
          variant="standard"
          fontSize="1.8rem"
          required
        />
        <Button variant="contained">Tra cứu đơn hàng</Button>
      </Typography>
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
}

export default Order;
