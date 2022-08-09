import * as React from 'react';
import { useStyles } from './checkout-payment.style';
import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import images from '~/assets/images';
import Invoice from '~/components/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { CHECKOUT_STEPS } from '~/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { numberWithCommas } from '~/common/utils';
import { createOrderRequest } from '~/redux/actions/order.action';
import Loading from '~/components/loading/loading.component';

function Checkout() {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart: cartReducer, order: orderReducer } = useSelector(
    (state) => state,
  );

  const [expanded, setExpanded] = React.useState(false); // Accordion
  // const [loading, setLoading] = React.useState(false);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Select payment method
  // const [paymentCard, setPaymentCard] = React.useState('');

  // const handleSelectCard = (event) => {
  //   setPaymentCard(event.target.value);
  // };

  // Select time-expired
  // const [expiredMonth, setExpiredMonth] = React.useState('');
  // const [expiredYear, setExpiredYear] = React.useState('');

  // const handleExpiredMonth = (event) => {
  //   setExpiredMonth(event.target.value);
  // };

  // const handleExpiredYear = (event) => {
  //   setExpiredYear(event.target.value);
  // };

  // //  Expired Time of cards payment
  // const d = new Date();
  // const months = [];
  // const days = [];

  // for (let i = d.getFullYear(); i <= d.getFullYear() + 10; i++) {
  //   months.push(i);
  // }

  // for (let j = 1; j < 13; j++) {
  //   if (j < 10) {
  //     j = '0' + j;
  //   }
  //   days.push(j);
  // }

  const handlePaymentByCash = () => {
    // setLoading(true);
    dispatch(
      createOrderRequest(
        { ...location.state.checkoutInfo, paymentMethod: 2 },
        navigate,
      ),
    );
  };

  const handlePaymentByTransfer = () => {
    dispatch(
      createOrderRequest(
        { ...location.state.checkoutInfo, paymentMethod: 0 },
        navigate,
      ),
    );
  };

  // console.log(orderReducer, 'orderReducer');

  return (
    <div className={classes.wrapper}>
      {orderReducer.status === 'pending' && <Loading />}
      <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
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
            mb={'32px'}
            fontSize={'1.8rem'}
            className={classes.paymentFormHeader}
          >
            <Typography variant="div" className={classes.accordionHeader}>
              <CheckCircleOutlineIcon sx={{ fontSize: '2.6rem' }} />
              <span>Vui lòng chọn phương thức thanh toán</span>
            </Typography>
          </Typography>

          <Typography variant="div">
            {/* start 1st Accordion */}
            <Accordion
              className={classes.accordionWrapper}
              expanded={expanded === 'panel1'}
              onChange={handleAccordion('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="div" className={classes.accordionTitle}>
                  <Typography variant="span" fontWeight="bold">
                    Thanh toán bằng cách chuyển khoản
                  </Typography>
                  <img
                    className={classes.paymentImgCard}
                    src={images.paymentCard1}
                    alt="Payment-card"
                  />
                </Typography>
              </AccordionSummary>

              {/* Form */}
              {/* <Typography
                  className={classes.checkoutInfoForm}
                  variant="form"
                  component="form"
                >
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Loại thẻ
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={paymentCard}
                          label="Loại thẻ"
                          onChange={handleSelectCard}
                        >
                          <MenuItem value={10} sx={{ fontSize: '1.6rem' }}>
                            MasterCard
                          </MenuItem>
                          <MenuItem value={20} sx={{ fontSize: '1.6rem' }}>
                            Visa
                          </MenuItem>
                          <MenuItem value={30} sx={{ fontSize: '1.6rem' }}>
                            JCB
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <TextField
                    label="Số thẻ"
                    fullWidth
                    type="text"
                    variant="standard"
                    required
                  />
                  <TextField
                    label="Tên chủ thẻ"
                    fullWidth
                    type="text"
                    variant="standard"
                    required
                  />

                  <InputLabel id="demo-simple-select-label1">
                    Hết hạn
                  </InputLabel>
                  <Grid container spacing={4} mb={'12px'}>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <Select
                          value={expiredMonth}
                          onChange={handleExpiredMonth}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem sx={{ fontSize: '1.4rem' }} value="">
                            <em>MM</em>
                          </MenuItem>
                          {days.map((day) => {
                            return (
                              <MenuItem
                                key={day}
                                value={day}
                                sx={{ fontSize: '1.6rem' }}
                              >
                                {day}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <Select
                          value={expiredYear}
                          onChange={handleExpiredYear}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          <MenuItem sx={{ fontSize: '1.4rem' }} value="">
                            <em>YY</em>
                          </MenuItem>
                          {months.map((month) => {
                            return (
                              <MenuItem
                                key={month}
                                value={month}
                                sx={{ fontSize: '1.6rem' }}
                              >
                                {month}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <TextField
                          sx={{ m: 0 }}
                          label="CVV/CVC"
                          fullWidth
                          type="text"
                          variant="outlined"
                          required
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Typography variant="div">
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.accordionBtn}
                    >
                      Tiếp Tục
                    </Button>
                  </Typography>
                </Typography> */}

              <AccordionDetails>
                <Typography
                  variant="div"
                  component="div"
                  className={classes.accordionContent}
                >
                  <Typography variant="div">
                    Khách hàng vui lòng thực hiện chuyển khoản theo các thông
                    tin chuyển khoản bên dưới, chúng tôi sẽ xác nhận đơn hàng
                    ngay khi đã xác nhận thông tin chuyển khoản thành công!
                  </Typography>
                  <Typography variant="div">
                    Sau khi chuyển khoản, vui lòng nhấn chọn <b>Tiếp tục</b> để
                    hoàn thành đơn hàng!
                  </Typography>
                  <Typography variant="div">
                    <p>
                      <b>Ngân hàng vietcombank</b>
                    </p>
                    <p>
                      <b>STK: 0081001179000</b>
                    </p>
                    <p>
                      <b>Nội dung: Tên khách hàng + email khách hàng</b>
                    </p>
                  </Typography>
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Tổng cộng:&nbsp;
                    <span>
                      {numberWithCommas(location.state.checkoutInfo.total)}
                      &nbsp;&#8363;
                    </span>
                  </Typography>
                  <Typography variant="div" className={classes.accordionBtn}>
                    <Button
                      variant="contained"
                      onClick={handlePaymentByTransfer}
                    >
                      Tiếp Tục
                    </Button>
                  </Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* end 1st Accordion  */}

            {/* start 2nd Accordion */}
            <Accordion
              className={classes.accordionWrapper}
              expanded={expanded === 'panel2'}
              onChange={handleAccordion('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography variant="div" className={classes.accordionTitle}>
                  <Typography variant="span" fontWeight="bold">
                    Thanh toán bằng Mã QR/Ví điện tử
                  </Typography>
                  <img
                    className={classes.paymentImgCard}
                    src={images.paymentCard2}
                    alt="Payment-card"
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="div"
                  component="div"
                  className={classes.accordionContent}
                >
                  <Typography variant="div">
                    Sau khi đọc và chấp thuận Điều khoản và Điều kiện mua hàng,
                    vui lòng nhấn "Tiếp tục" để được chuyến hướng đến trang
                    thanh toán trực tuyến và hoàn thành quy trình mua hàng một
                    cách an toàn, bảo mật.
                  </Typography>
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Tổng cộng:&nbsp;
                    <span>
                      {numberWithCommas(location.state.checkoutInfo.total)}
                      &nbsp;&#8363;
                    </span>
                  </Typography>
                  <Typography variant="div" className={classes.accordionBtn}>
                    <Button variant="contained">Tiếp Tục</Button>
                  </Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* end 2nd Accordion */}

            {/* start 3rd Accordion */}
            <Accordion
              className={classes.accordionWrapper}
              expanded={expanded === 'panel3'}
              onChange={handleAccordion('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography variant="div" className={classes.accordionTitle}>
                  <Typography variant="span" fontWeight="bold">
                    Thanh toán tiền mặt
                  </Typography>
                  <AttachMoneyIcon
                    sx={{
                      fontSize: '3rem',
                    }}
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="div"
                  component="div"
                  className={classes.accordionContent}
                >
                  <Typography variant="div">
                    Sau khi đọc và chấp thuận Điều khoản và Điều kiện mua hàng,
                    hãy vui lòng nhấn chọn Tiếp tục. Tin nhắn yêu cầu xác nhận
                    sẽ được gửi đến email của bạn. Vui lòng xác nhận bằng cách
                    làm theo hướng dẫn trong mail. Nếu bạn không xác nhận, đơn
                    hàng sẽ không được xử lý.
                  </Typography>
                  <Typography variant="div">
                    <strong>
                      <em>
                        Lưu ý, cửa hàng chỉ xác nhận đơn hàng thanh toán tiền
                        mặt có giá trị dưới 10 triệu đồng. Các hóa đơn giá trị
                        cao hơn vui lòng thực hiện thanh toán qua hình thức
                        chuyển khoản!
                      </em>
                    </strong>
                  </Typography>
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Tổng cộng:&nbsp;
                    <span>
                      {numberWithCommas(location.state.checkoutInfo.total)}
                      &nbsp;&#8363;
                    </span>
                  </Typography>
                  <Typography variant="div" className={classes.accordionBtn}>
                    <Button variant="contained" onClick={handlePaymentByCash}>
                      Tiếp Tục
                    </Button>
                  </Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* end 3rd Accordion */}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Invoice cart={cartReducer} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
