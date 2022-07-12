import { useStyles } from './order-body.style';
import { Typography } from '@mui/material';

import cx from 'classnames';

function OrderBody(props) {
  const classes = useStyles();
  return (
    <div className={cx(classes.wrapper, props)}>
      <Typography variant="div" component="div" className={classes.orderBody}>
        <img
          className={classes.orderProductImg}
          src="https://cdn.jblstore.com.vn/UploadTemp/7960173a-1c8a-4c13-b761-f6d49a9713df.jpg"
          alt="order-item-img"
        />

        <Typography
          variant="div"
          component="div"
          className={classes.orderProductInfo}
        >
          <Typography
            variant="span"
            component="span"
            className={classes.orderProductName}
          >
            Galaxy s22+
          </Typography>
          <span>
            Mã sản phẩm: <span>SM-S906EZWDXXV</span>
          </span>

          <span>
            Số lượng: <span>1</span>
          </span>
          <span>
            Giá sản phẩm: <span>1.300.000 đ</span>
          </span>
        </Typography>
        {/* info */}
      </Typography>
    </div>
  );
}

export default OrderBody;
