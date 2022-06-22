import * as React from 'react';
import { useStyles } from './checkout.style';
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Step,
  ColorlibConnector,
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

  // select form
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                />
              </Grid>
            </Grid>

            <TextField
              label="Tên"
              fullWidth
              type="text"
              variant="standard"
              required
            />
            <TextField
              label="Tên"
              fullWidth
              type="text"
              variant="standard"
              required
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
