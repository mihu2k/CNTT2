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
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '108px 0 32px 0',
          color: '#212738',
        }}
      >
        Mã đơn hàng
      </Typography>

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

      <Typography
        variant="div"
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <TextField
          id="standard-basic"
          label="Mã đơn hàng"
          variant="standard"
          fontSize="1.8rem"
          required
        />
        <Button
          variant="contained"
          sx={{
            color: '#fff',
            backgroundColor: '#2189ff',
            margin: '32px 0',
          }}
        >
          Tra cứu đơn hàng
        </Button>
      </Typography>
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
}

export default Order;
