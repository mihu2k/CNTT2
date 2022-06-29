import * as React from 'react';
import { useStyles } from './checkout.style';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import image from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import cx from 'classnames';
import images from '~/assets/images';

function Checkout() {
  const classes = useStyles();

  // Stepper
  const steps = [
    'Điền thông tin giao hàng',
    'Chọn thanh toán',
    'Hoàn thành đặt hàng',
  ];

  //Accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Select payment method
  const [paymentCard, setPaymentCard] = React.useState('');

  const handleSelectCard = (event) => {
    setPaymentCard(event.target.value);
  };

  // Select time-expired
  const [expiredMonth, setExpiredMonth] = React.useState('');
  const [expiredYear, setExpiredYear] = React.useState('');

  const handleExpiredMonth = (event) => {
    setExpiredMonth(event.target.value);
  };
  const handleExpiredYear = (event) => {
    setExpiredYear(event.target.value);
  };

  //  Expired Time of cards payment
  const d = new Date();
  const months = [];
  const days = [];

  for (let i = d.getFullYear(); i <= d.getFullYear() + 10; i++) {
    months.push(i);
  }

  for (let j = 1; j < 13; j++) {
    if (j < 10) {
      j = '0' + j;
    }
    days.push(j);
  }

  return (
    <div className={classes.wrapper}>
      <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={7}>
          {/* start accordion header */}
          <Typography
            variant="div"
            mb={'32px'}
            fontSize={'1.8rem'}
            className={classes.paymentFormHeader}
          >
            <Typography
              variant="div"
              sx={{
                display: 'flex',
                alignItem: 'center',
                gap: '8px',
                fontWeight: 'bold',
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: '2.6rem' }} />
              <span>Vui lòng kiểm tra đơn hàng</span>
            </Typography>
            {/* Back to shipment info checkout page */}
            <Link to={'./'}>
              <Button
                variant="text"
                sx={{ color: '#000', fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                Chỉnh sửa
              </Button>
            </Link>
          </Typography>
          {/* end accordion header */}

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
                <Typography
                  variant="div"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.8rem',
                  }}
                >
                  <Typography variant="span" fontWeight="bold">
                    Thanh toán bằng thẻ quốc tế
                  </Typography>
                  <img
                    className={classes.paymentImgCard}
                    src={images.paymentCard1}
                    alt="Payment-card"
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* Form */}
                <Typography
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
                  <Grid container spacing={4}>
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
                <Typography
                  variant="div"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.8rem',
                  }}
                >
                  <Typography variant="span" fontWeight="bold">
                    Thanh toán bằng ATM/Mã QR/Ví điện tử
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
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '1.6rem',
                    gap: '20px',
                    color: '#000',
                  }}
                >
                  <Typography variant="div">
                    Sau khi đọc và chấp thuận Điều khoản và Điều kiện mua hàng,
                    vui lòng nhấn "Tiếp tục" để được chuyến hướng đến trang
                    thanh toán trực tuyến và hoàn thành quy trình mua hàng một
                    cách an toàn, bảo mật.
                  </Typography>
                  <Typography variant="div" fontWeight="bold">
                    Tổng cộng: <span>1.390.000 &#8363;</span>
                  </Typography>
                  <Typography variant="div">
                    <Button
                      variant="contained"
                      sx={{
                        height: '40px',
                        minWidth: '153px',
                        backgroundColor: '#2189ff',
                        color: '#fff',
                        fontSize: '1.4rem',
                        lineHeight: '1.33',
                        border: '0',
                        padding: '10px 0',
                        borderRadius: '24px',
                        fontWeight: '700',
                      }}
                    >
                      Tiếp Tục
                    </Button>
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
                <Typography
                  variant="div"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.8rem',
                  }}
                >
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
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '1.6rem',
                    gap: '20px',
                    color: '#000',
                  }}
                >
                  <Typography variant="div">
                    Sau khi đọc và chấp thuận Điều khoản và Điều kiện mua hàng,
                    hãy vui lòng nhấn chọn Tiếp tục. Tin nhắn yêu cầu xác nhận
                    sẽ được gửi đến số điện thoại nhận hàng và email của bạn.
                    Vui lòng xác nhận bằng cách điền OTP.
                  </Typography>
                  <Typography variant="div">
                    Nếu bạn không xác nhận, đơn hàng sẽ không được xử lý.
                  </Typography>
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    Tổng cộng: <span>1.390.000 &#8363;</span>
                  </Typography>
                  <Typography variant="div">
                    <Button
                      variant="contained"
                      sx={{
                        height: '40px',
                        minWidth: '153px',
                        backgroundColor: '#2189ff',
                        color: '#fff',
                        fontSize: '1.4rem',
                        lineHeight: '1.33',
                        border: '0',
                        padding: '10px 0',
                        borderRadius: '24px',
                        fontWeight: '700',
                      }}
                    >
                      Tiếp Tục
                    </Button>
                  </Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* end 3rd Accordion */}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.invoiceWrapper}>
            <div className={classes.invoiceHeader}>
              <div className={classes.invoiceHeaderTitle}>
                Đơn hàng (<span className={classes.quatityProduct}>1</span> sản
                phẩm)
              </div>

              {/* chuyển trang về giỏi hàng */}
              <Link to={'./'}>
                <Button
                  variant="text"
                  sx={{ color: '#000', fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  Chỉnh sửa
                </Button>
              </Link>
            </div>
            <div className={classes.invoiceBody}>
              <div className={classes.invoiceProductInfo}>
                <img
                  className={classes.invoiceImg}
                  src="https://cdn.jblstore.com.vn/UploadTemp/7960173a-1c8a-4c13-b761-f6d49a9713df.jpg"
                  alt="img-product-checkout-invoice"
                />
                <div className={classes.invoiceInfo}>
                  <h3 className={classes.invoiceInfoName}>JBL TUNE110</h3>
                  <div className={cx(classes.invoiceInfoDesc, 'colorInfo')}>
                    <span>Màu sắc</span>
                    <span className={classes.cicle}></span>
                  </div>
                  <div className={classes.invoiceInfoDesc}>
                    <span>Số lượng</span>
                    <span>1</span>
                  </div>
                  <div className={classes.invoiceInfoDesc}>
                    <span>Thương hiệu</span>
                    <span className={classes.invoiceInfoBrand}>JBL</span>
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
                  <span className={classes.moneyDetail}>1.390.000 &#8363;</span>
                </li>
                <li className={classes.moneyInfoList}>
                  <span className={classes.moneyInfo}>Mã giảm giá</span>
                  <span className={classes.moneyDetail}>0 &#8363;</span>
                </li>
                <li className={classes.moneyInfoList}>
                  <span className={classes.moneyInfo}>Phí vận chuyển</span>
                  <span className={classes.moneyDetail}>0 &#8363;</span>
                </li>
              </ul>

              <ul>
                <li className={cx(classes.moneyInfoList, 'detail')}>
                  <span className={cx(classes.moneyInfo, 'lastDetail')}>
                    Tổng giá
                  </span>
                  <span className={cx(classes.moneyDetail, 'lastDetail')}>
                    1.390.000 &#8363;
                  </span>
                </li>
              </ul>
              <span>(Đã bao gồm VAT nếu có)</span>
            </div>
            <Typography
              variant="div"
              component="div"
              sx={{
                display: 'block',
                minHeight: '45px',
                margin: '32px 0',
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="text"
                sx={{
                  color: '#fff',
                  backgroundColor: '#2189ff',
                  minWidth: '100%',
                  height: '100%',
                  padding: '10px 0',
                  borderRadius: '24px',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: '#2189ff',
                    backgroundColor: '#2189ff',
                  },
                }}
              >
                Tiếp tục
              </Button>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
