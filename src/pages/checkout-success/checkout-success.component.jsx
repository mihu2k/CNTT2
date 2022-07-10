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
import { numberWithCommas } from '~/common/utils';
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
    location.state?.orderId && getOrderById(location.state.orderId);
  }, []);

  React.useEffect(() => {
    if (orderReducer.order) {
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
    }
  }, [orderReducer]);

  return (
    <div className={classes.wrapper}>
      <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
        <Stepper
          activeStep={orderReducer.order?.isVerify ? 3 : 2}
          alternativeLabel
        >
          {CHECKOUT_STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {orderReducer.status === 'pending' ? (
        <div style={{ height: '50vh' }}>
          <Loading style={{ backgroundColor: 'transparent' }} />
        </div>
      ) : (
        <>
          {orderReducer.order?.isVerify ? (
            <>
              {/* <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
                <Stepper activeStep={2} alternativeLabel>
                  {CHECKOUT_STEPS.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box> */}

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
                          Mã đơn hàng:&nbsp;
                          <span>{orderReducer.order?.code}</span>
                        </p>
                        <p>
                          Cám ơn bạn vì đã xác nhận đơn hàng, theo đõi đơn hàng
                          của bạn&nbsp;
                          <Link to={config.routes.order}>
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
                          Thông tin đặt hàng (
                          {orderReducer.order?.shipMethod === 0
                            ? 'Giao hàng tận nơi'
                            : 'Nhận tại cửa hàng'}
                          )
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
                          Thông tin&nbsp;
                          {orderReducer.order?.shipMethod === 0
                            ? 'vận chuyển'
                            : 'khách hàng'}
                        </Typography>
                        <p>{orderReducer.order?.fullName}</p>
                        <p>{orderReducer.order?.phone}</p>
                        <p>{orderReducer.order?.email}</p>
                        <p>{orderReducer.order?.deliveryAddress}</p>
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
                        <p>
                          {orderReducer.order?.paymentMethod === 2
                            ? 'Thanh toán tiền mặt'
                            : orderReducer.order?.paymentMethod === 1
                            ? 'Thanh toán ATM/QR/Ví điện tử'
                            : 'Thanh toán thẻ quốc tế VISA'}
                        </p>
                      </div>
                    </div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <div className={classes.invoiceWrapper}>
                    <div className={classes.invoiceHeader}>
                      <div className={classes.invoiceHeaderTitle}>
                        Đơn hàng (
                        <span className={classes.quatityProduct}>
                          {orderReducer.order?.products?.length}
                        </span>
                        &nbsp; sản phẩm)
                      </div>
                    </div>
                    <div className={classes.invoiceBody}>
                      {orderReducer.order?.products?.length > 0
                        ? orderReducer.order?.products?.map((product) => (
                            <div
                              className={classes.invoiceProductInfo}
                              key={product?._id}
                            >
                              <div className="d-f">
                                <img
                                  className={classes.invoiceImg}
                                  src={`${process.env.REACT_APP_API_BASE_URL}${product?.productId?.colorImage}`}
                                  alt={product?.productId?.productId?.name}
                                />
                                <div
                                  className={cx(classes.invoiceInfo, 'ml-16px')}
                                >
                                  <h3 className={classes.invoiceInfoName}>
                                    {product?.productId?.productId?.name}
                                  </h3>
                                  <div
                                    className={cx(
                                      classes.invoiceInfoDesc,
                                      'colorInfo',
                                    )}
                                  >
                                    <span>Màu sắc</span>
                                    <span
                                      className={classes.cicle}
                                      style={{
                                        backgroundColor:
                                          product?.productId?.colorValue,
                                      }}
                                    />
                                  </div>
                                  <div className={classes.invoiceInfoDesc}>
                                    <span>Số lượng</span>
                                    <span>{product?.quantity}</span>
                                  </div>
                                  <div className={classes.invoiceInfoDesc}>
                                    <span>Thương hiệu</span>
                                    <span className={classes.invoiceInfoBrand}>
                                      {product?.productId?.productId?.brand ??
                                        'RENE'}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className={classes.invoiceInfoDesc}>
                                <span className={classes.invoiceInfoPrice}>
                                  {numberWithCommas(product?.price)}
                                  &nbsp;&#8363;
                                </span>
                              </div>
                            </div>
                          ))
                        : null}

                      <ul style={{ marginTop: '24px' }}>
                        <li className={classes.moneyInfoList}>
                          <span className={classes.moneyInfo}>Tạm tính</span>
                          <span className={classes.moneyDetail}>
                            {numberWithCommas(
                              orderReducer.order?.products?.reduce(
                                (total, product) =>
                                  total + product.price * product.quantity,
                                0,
                              ),
                            )}
                            &nbsp;&#8363;
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
                            {numberWithCommas(
                              orderReducer.order?.products?.reduce(
                                (total, product) =>
                                  total + product.price * product.quantity,
                                0,
                              ),
                            )}
                            &nbsp;&#8363;
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
