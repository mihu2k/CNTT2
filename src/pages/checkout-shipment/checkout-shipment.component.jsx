import * as React from 'react';
import { useStyles } from './checkout-shipment.style';
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
import Invoice from '~/components/invoices';

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
        <Grid item xs={12} sm={12} md={7}>
          <Typography
            fontSize="1.8rem"
            fontWeight="700"
            textTransform="uppercase"
            variant="h1"
            component="h1"
          >
            Thanh toán
          </Typography>
          <Typography
            className={classes.checkoutInfoForm}
            variant="form"
            component="form"
          >
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
                <TextField
                  label="Email"
                  fullWidth
                  variant="standard"
                  required
                />
              </>
            )}

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

            <Typography
              variant="div"
              component="div"
              className={classes.shipmentFormBtn}
            >
              <Button type="submit" fullWidth variant="text">
                Tiếp tục
              </Button>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Invoice />
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
