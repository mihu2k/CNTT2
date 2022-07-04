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
            Tổng tiền: <span>1.300.000 đ</span>
          </span>

          <Typography
            variant="span"
            component="span"
            className={classes.orderProductStatus}
          >
            Đang xử lý
          </Typography>
          <Typography
            variant="span"
            component="span"
            className={classes.orderProductShipmentInfo}
          >
            <p>
              Ship từ: <span>20/06/2022</span> <span>Giao hàng nhanh</span>
            </p>
            <p>
              Phí vận chuyển: <span>Free</span>
            </p>
          </Typography>
        </Typography>
        <Typography variant="div" component="div">
          <Typography
            variant="div"
            component="div"
            className={classes.orderShipmentInfo}
          >
            <Typography
              variant="p"
              component="p"
              className={classes.orderShipmentInfoTitle}
            >
              <Typography
                variant="span"
                component="span"
                sx={{
                  fontSize: '1.7rem',
                }}
              >
                Thông tin vận chuyển
              </Typography>
            </Typography>
            <p>Phạm Quốc Vương</p>
            <p>0369830702</p>
            <p>Vuongnguyen30702@gmail.com</p>
            <p>
              200/12/6, đường Lê Văn Lương, phường Tân Hưng, Quận 7, Thành phố
              Hồ Chí Minh
            </p>
            <Typography
              variant="p"
              component="p"
              className={classes.orderShipmentInfoTitle}
            >
              <Typography
                variant="span"
                component="span"
                sx={{
                  fontSize: '1.7rem',
                }}
              >
                Phương thức thanh toán
              </Typography>
            </Typography>
            <p className={classes.orderPaymentMethodInfo}>Thanh toán tiền mặt</p>
          </Typography>
        </Typography>
      </Typography>
    </div>
  );
}

export default OrderBody;
