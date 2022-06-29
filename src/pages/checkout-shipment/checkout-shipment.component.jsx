import * as React from 'react';
import { useStyles } from './checkout.style';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

// import image from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import cx from 'classnames';
import images from '~/assets/images';

function Checkout() {
  const classes = useStyles();

  // user login then current user == true;
  const currentUser = true;

  // Stepper
  const steps = [
    'Điền thông tin giao hàng',
    'Chọn thanh toán',
    'Hoàn thành đặt hàng',
  ];

  // select form address
  const [city, setCity] = React.useState('');
  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const [district, setDistrict] = React.useState('');
  const handleDistrict = (event) => {
    setDistrict(event.target.value);
  };

  const [ward, setWard] = React.useState('');
  const handleWard = (event) => {
    setWard(event.target.value);
  };

  //call API render address

  // button radio take order by what
  const [takeOrder, setTakeOrder] = React.useState(0);

  const handleTakeOrder = (event) => {
    setTakeOrder(event.target.value);
  };
  return (
    <div className={classes.wrapper}>
      <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Typography
            fontSize="1.8rem"
            fontWeight="700"
            textTransform="uppercase"
            variant="h1"
            component="h1"
          >
            Thanh toán
          </Typography>

          {currentUser ? (
            <>
              <Typography
                fontSize="1.6rem"
                fontWeight="400"
                lineHeight="1.33"
                color="#8f8f8f"
                mt="40px"
                mb="16px"
                variant="div"
                component="div"
              >
                <p>Địa chỉ email</p>

                <Typography
                  fontSize="1.8rem"
                  fontWeight="500"
                  color="#000"
                  mt="8px"
                  variant="p"
                  component="p"
                >
                  vuongnguyen30702@gmail.com
                </Typography>
              </Typography>
            </>
          ) : (
            <>
              <TextField label="Email" fullWidth variant="standard" required />
            </>
          )}

          <Typography
            className={classes.checkoutInfoForm}
            variant="form"
            component="form"
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={takeOrder}
                onChange={handleTakeOrder}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="GIAO HÀNG TẬN NƠI"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="NHẬN TẠI CỬA HÀNG"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Họ tên người nhận"
              fullWidth
              type="text"
              variant="standard"
              required
            />

            <TextField
              label="Số điện thoại người nhận"
              fullWidth
              type="tel"
              variant="standard"
              required
            />
            {currentUser ? (
              <>
                <Typography
                  fontSize="1.6rem"
                  fontWeight="400"
                  lineHeight="1.33"
                  color="#8f8f8f"
                  mt="40px"
                  mb="16px"
                  variant="div"
                  component="div"
                >
                  <p>Địa chỉ đã lưu</p>

                  <Typography
                    fontSize="1.8rem"
                    fontWeight="500"
                    color="#000"
                    mt="8px"
                    variant="p"
                    component="p"
                  >
                    200/12/6 Lê Văn Lương, Phường Tân Hưng, Quận 7
                  </Typography>
                </Typography>
              </>
            ) : (
              <>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      label="Số nhà"
                      fullWidth
                      type="text"
                      variant="standard"
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Đường/Phố"
                      fullWidth
                      type="tel"
                      variant="standard"
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ marginTop: '32px' }}>
                      <InputLabel id="demo-simple-select-label-city">
                        Chọn Tỉnh/Thành phố
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label-city"
                        id="demo-simple-select-city"
                        value={city}
                        label="Chọn Tỉnh/ Thành phố"
                        onChange={handleCity}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ marginTop: '32px' }}>
                      <InputLabel id="demo-simple-select-label-district">
                        Chọn Quận/Huyện
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label-district"
                        id="demo-simple-select-district"
                        value={district}
                        label="Chọn Quận/Huyện"
                        onChange={handleDistrict}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ marginTop: '32px' }}>
                      <InputLabel id="demo-simple-select-label-ward">
                        Chọn Phường
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label-ward"
                        id="demo-simple-select-ward"
                        value={ward}
                        label="Chọn Phường"
                        onChange={handleWard}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Làng/Khu phố - không bắt buộc"
                      fullWidth
                      type="text"
                      variant="outlined"
                      sx={{ marginTop: '32px' }}
                    />
                  </Grid>
                </Grid>
              </>
            )}

            <TextField
              label="Lưu ý giao hàng - không bắt buộc"
              fullWidth
              type="text"
              variant="standard"
            />
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
