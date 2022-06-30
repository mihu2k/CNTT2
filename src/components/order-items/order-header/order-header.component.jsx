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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.2rem',
          color: '#212738',
        }}
      >
        <Typography
          variant="div"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxHeight: '15px',
          }}
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
        {/* <Button
          variant="outlined"
          sx={{
            color: '#000',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            borderColor: '#000',
            outline: 'none',
          }}
        >
          Hủy đơn hàng
        </Button> */}
      </Typography>
    </div>
  );
}

export default OrderHeader;
