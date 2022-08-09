import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '~/components/order-items/order-item';
import { getOrdersByYourselfRequest } from '~/redux/actions/order.action';
import { useStyles } from './orders.style';

export default function Order() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState({ search: '', per_page: 10 });

  const { order: orderReducer } = useSelector((state) => state);

  const fetchYourOrders = (query = {}) => {
    dispatch(getOrdersByYourselfRequest(query));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, search: e.target.value }));
    if (!e.target.value) fetchYourOrders(query);
  };

  const handleSearch = () => {
    fetchYourOrders(query);
  };

  React.useEffect(() => {
    fetchYourOrders(query);
  }, []);

  // console.log(orderReducer, 'orderReducer');

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
          value={query.search}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSearch}>
          Tra cứu đơn hàng
        </Button>
      </Typography>

      <InfiniteScroll
        dataLength={orderReducer.orders?.length}
        next={() => {
          setQuery((prev) => ({ ...query, per_page: prev.per_page + 10 }));
          fetchYourOrders({ ...query, per_page: query.per_page + 10 });
        }}
        hasMore={orderReducer.orders?.length < orderReducer.totalRecord}
        loader={<h4>Loading...</h4>}
      >
        {orderReducer.orders?.length > 0 ? (
          orderReducer.orders?.map((order) => (
            <OrderItem key={order?._id} order={order} />
          ))
        ) : (
          <p>
            {query.search
              ? 'Không tìm thấy đơn hàng nào.'
              : 'Chưa có đơn hàng nào.'}
          </p>
        )}
      </InfiniteScroll>
    </div>
  );
}
