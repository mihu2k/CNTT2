import * as React from 'react';
import { useStyles } from './checkout-success.style';
import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Typography,
  Button,
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

// import image from '~/assets/images';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { CHECKOUT_STEPS } from '~/constants';
import { getOrderByIdRequest } from '~/redux/actions/order.action';
import Loading from '~/components/loading/loading.component';
// import config from '~/config';
// import images from '~/assets/images';
// import routes from '~/config/routes-config';

function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const { order: orderReducer } = useSelector((state) => state);

  const getOrderById = (id) => {
    dispatch(getOrderByIdRequest(id));
  };

  React.useEffect(() => {
    const intervalGetOrder = setInterval(() => {
      location.state?.orderId && getOrderById(location.state.orderId);
      console.log('setInterval');
    }, 1000 * 7);

    if (orderReducer.order?.isVerify || orderReducer.status === 'failure') {
      clearInterval(intervalGetOrder);
      console.log('CONFIRMED');
      return;
    }

    return () => clearInterval(intervalGetOrder);
  }, [orderReducer]);

  return (
    <div className={classes.wrapper}>
      {orderReducer.status === 'pending' ? (
        <div style={{ height: '50vh' }}>
          <Loading style={{ backgroundColor: 'transparent' }} />
        </div>
      ) : (
        <>
          {orderReducer.order?.isVerify ? (
            <>
              <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
                <Stepper activeStep={2} alternativeLabel>
                  {CHECKOUT_STEPS.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={7}>
                  <Typography
                    variant="div"
                    component="div"
                    className={classes.successContainer}
                    sx={{ display: 'flex', gap: '20px' }}
                  >
                    <span className={classes.successIcon}>
                      <CheckIcon
                        sx={{
                          fontSize: '4.5rem',
                          color: 'var(--primary-color)',
                          fontWeight: '400',
                          marginTop: '25px',
                        }}
                      />
                    </span>

                    <div>
                      <div className={classes.headingInfo}>
                        <p className={classes.headingStoreName}>RENÉ</p>
                        <p>Đơn đặt hàng đã được xác nhận</p>
                        <p>
                          Mã Đơn hàng:{' '}
                          <span>#Rene001 {orderReducer.order?.isVerify}</span>
                        </p>
                        <p>
                          Cám ơn bạn vì đã xác nhận đơn hàng, theo đõi đơn hàng
                          của bạn&nbsp;
                          <Link to={'./'}>
                            <span className={classes.orderInfoLink}>
                              tại đây!
                            </span>
                          </Link>
                        </p>
                      </div>
                      <div className={classes.orderInfoTable}>
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                          }}
                        >
                          Thông tin đặt hàng
                        </Typography>
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            margin: '20px 0 0 0',
                          }}
                        >
                          Thông tin vận chuyển
                        </Typography>
                        <p>Phạm Quốc Vương</p>
                        <p>0369830702</p>
                        <p>Vuongnguyen30702@gmail.com</p>
                        <p>
                          200/12/6, đường Lê Văn Lương, phường Tân Hưng, Quận 7,
                          Thành phố Hồ Chí Minh
                        </p>
                        <Typography
                          variant="p"
                          component="p"
                          sx={{
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            margin: '20px 0 0 0',
                          }}
                        >
                          Phương thức thanh toán
                        </Typography>
                        <p>Thanh toán tiền mặt</p>
                      </div>
                    </div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <div className={classes.invoiceWrapper}>
                    <div className={classes.invoiceHeader}>
                      <div className={classes.invoiceHeaderTitle}>
                        Đơn hàng (
                        <span className={classes.quatityProduct}>1</span> sản
                        phẩm)
                      </div>
                    </div>
                    <div className={classes.invoiceBody}>
                      <div className={classes.invoiceProductInfo}>
                        <img
                          className={classes.invoiceImg}
                          src="https://cdn.jblstore.com.vn/UploadTemp/7960173a-1c8a-4c13-b761-f6d49a9713df.jpg"
                          alt="img-product-checkout-invoice"
                        />
                        <div className={classes.invoiceInfo}>
                          <h3 className={classes.invoiceInfoName}>
                            JBL TUNE110
                          </h3>
                          <div
                            className={cx(classes.invoiceInfoDesc, 'colorInfo')}
                          >
                            <span>Màu sắc</span>
                            <span className={classes.cicle}></span>
                          </div>
                          <div className={classes.invoiceInfoDesc}>
                            <span>Số lượng</span>
                            <span>1</span>
                          </div>
                          <div className={classes.invoiceInfoDesc}>
                            <span>Thương hiệu</span>
                            <span className={classes.invoiceInfoBrand}>
                              JBL
                            </span>
                          </div>
                        </div>
                        <div className={classes.invoiceInfoDesc}>
                          <span className={classes.invoiceInfoPrice}>
                            1.390.000 &#8363;
                          </span>
                        </div>
                      </div>

                      <ul>
                        <li className={classes.moneyInfoList}>
                          <span className={classes.moneyInfo}>Tạm tính</span>
                          <span className={classes.moneyDetail}>
                            1.390.000 &#8363;
                          </span>
                        </li>
                        <li className={classes.moneyInfoList}>
                          <span className={classes.moneyInfo}>Mã giảm giá</span>
                          <span className={classes.moneyDetail}>0 &#8363;</span>
                        </li>
                        <li className={classes.moneyInfoList}>
                          <span className={classes.moneyInfo}>
                            Phí vận chuyển
                          </span>
                          <span className={classes.moneyDetail}>0 &#8363;</span>
                        </li>
                      </ul>

                      <ul>
                        <li className={cx(classes.moneyInfoList, 'detail')}>
                          <span className={cx(classes.moneyInfo, 'lastDetail')}>
                            Tổng giá
                          </span>
                          <span
                            className={cx(classes.moneyDetail, 'lastDetail')}
                          >
                            1.390.000 &#8363;
                          </span>
                        </li>
                      </ul>
                      <span>(Đã bao gồm VAT nếu có)</span>
                    </div>
                    <Typography
                      variant="div"
                      component="div"
                      className={classes.backToShopBtn}
                    >
                      {/* back to product page */}
                      <Link to={config.routes.product}>
                        <Button fullWidth variant="text">
                          Tiếp tục mua hàng
                        </Button>
                      </Link>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </>
          ) : (
            <p style={{ height: '50vh' }}>Chưa đc xác nhận</p>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
