import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '~/components/order-items/order-item';
import { getOrdersByYourselfRequest } from '~/redux/actions/order.action';
import { useStyles } from './orders.style';

export default function Order() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { order: orderReducer } = useSelector((state) => state);

  const fetchYourOrders = (query = {}) => {
    dispatch(getOrdersByYourselfRequest(query));
  };

  React.useEffect(() => {
    fetchYourOrders();
  }, []);

  console.log(orderReducer, 'orderReducer');

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

      {orderReducer.orders?.length > 0 ? (
        orderReducer.orders?.map((order) => (
          <OrderItem key={order?._id} order={order} />
        ))
      ) : (
        <p>Chưa có đơn hàng nào.</p>
      )}
    </div>
  );
}
