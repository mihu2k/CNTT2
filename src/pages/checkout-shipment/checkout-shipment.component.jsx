import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useStyles } from './checkout-shipment.style';

// import image from '~/assets/images';
import Invoice from '~/components/invoices';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { showToastMsg } from '~/common/utils';
import config from '~/config';
import { CHECKOUT_STEPS } from '~/constants';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  address: yup.string(),
  fullName: yup.string().required(),
  phone: yup.string().matches(phoneRegExp),
  note: yup.string().notRequired(),
  // email: yup.string().required().email(),
});

function Checkout() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const { cart: cartReducer } = useSelector((state) => state);

  // user login then current user == true;
  const currentUser = JSON.parse(localStorage.getItem('profile'));

  const [formValue, setFormValue] = React.useState({
    province: '',
    district: '',
    ward: '',
  });
  // select form address
  const [city, setCity] = React.useState([]);
  const [district, setDistrict] = React.useState([]);
  const [ward, setWard] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = {
      ...data,
      shipMethod: takeOrder,
      total: cartReducer.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      ),
      email: currentUser?.data?.email,
      products: cartReducer.products,
    };
    if (takeOrder === 0) {
      if (formValue.district && formValue.ward) {
        const { province_name } = city.find(
          (item) => item.province_id === formValue.province,
        );
        const { district_name } = district.find(
          (item) => item.district_id === formValue.district,
        );
        const { ward_name } = ward.find(
          (item) => item.ward_id === formValue.ward,
        );

        formData.address = `${data.address}, ${ward_name}, ${district_name}, ${province_name}`;
        console.log(formData, 'DATA');
        navigate(config.routes.checkoutPayment, {
          state: { checkoutInfo: formData },
        });
        return;
      }
      showToastMsg('warning', 'Thông tin chưa đủ.', {
        toastId: data,
        autoClose: 3000,
      });
    } else {
      navigate(config.routes.checkoutPayment, {
        state: { checkoutInfo: formData },
      });
    }
  };

  const handleChangeSelect = (type, e) => {
    setFormValue((prev) => ({ ...prev, [type]: e.target.value }));
  };

  //call API render address

  // button radio take order by what
  const [takeOrder, setTakeOrder] = React.useState(0);

  const handleTakeOrder = (event) => {
    setTakeOrder(Number(event.target.value));
  };

  React.useEffect(() => {
    (async () => {
      const {
        data: { results: province },
      } = await axios.get('https://vapi.vnappmob.com/api/province');
      setCity(province);
      setFormValue((prev) => ({ ...prev, province: province[0]?.province_id }));
      console.log(province, 'province');
    })();
  }, []);

  React.useEffect(() => {
    formValue.province &&
      (async () => {
        const {
          data: { results: district },
        } = await axios.get(
          `https://vapi.vnappmob.com/api/province/district/${formValue.province}`,
        );
        setDistrict(district);
      })();
  }, [formValue.province]);

  React.useEffect(() => {
    formValue.district &&
      (async () => {
        const {
          data: { results: ward },
        } = await axios.get(
          `https://vapi.vnappmob.com/api/province/ward/${formValue.district}`,
        );
        setWard(ward);
      })();
  }, [formValue.district]);

  // console.log(authReducer, 'authReducer');
  // console.log(errors, 'errors----');
  console.log(location, 'OCATION SHIPMENT');

  return (
    <div className={classes.wrapper}>
      <Box className={classes.stepsContainer} sx={{ width: '100%' }}>
        <Stepper activeStep={0} alternativeLabel>
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
            fontSize="1.8rem"
            fontWeight="700"
            textTransform="uppercase"
            variant="h1"
            component="h2"
          >
            Thông tin thanh toán
          </Typography>
          <Typography
            className={classes.checkoutInfoForm}
            variant="form"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email"
              fullWidth
              variant="standard"
              required
              value={currentUser?.data?.email}
              disabled
              // {...register('email')}
              // error={!!errors?.email?.message}
            />
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={takeOrder}
                onChange={handleTakeOrder}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="GIAO HÀNG TẬN NƠI"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="NHẬN TẠI CỬA HÀNG"
                />
              </RadioGroup>
            </FormControl>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Họ tên người nhận"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                  {...register('fullName')}
                  error={!!errors?.fullName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Số điện thoại người nhận"
                  fullWidth
                  type="tel"
                  variant="standard"
                  required
                  {...register('phone')}
                  error={!!errors?.phone?.message}
                />
              </Grid>
            </Grid>

            {takeOrder === 0 && (
              <>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <FormControl fullWidth sx={{ marginTop: '32px' }}>
                      <InputLabel id="demo-simple-select-label-city">
                        Chọn Tỉnh/Thành phố
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label-city"
                        id="demo-simple-select-city"
                        value={formValue.province}
                        label="Chọn Tỉnh/ Thành phố"
                        onChange={(e) => handleChangeSelect('province', e)}
                      >
                        {city.length > 0 &&
                          city?.map((item) => (
                            <MenuItem
                              key={item.province_id}
                              value={item.province_id}
                            >
                              {item.province_name}
                            </MenuItem>
                          ))}
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
                        value={formValue.district}
                        label="Chọn Quận/Huyện"
                        onChange={(e) => handleChangeSelect('district', e)}
                      >
                        {district.length > 0 &&
                          district?.map((item) => (
                            <MenuItem
                              key={item.district_id}
                              value={item.district_id}
                            >
                              {item.district_name}
                            </MenuItem>
                          ))}
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
                        value={formValue.ward}
                        label="Chọn Phường"
                        onChange={(e) => handleChangeSelect('ward', e)}
                      >
                        {ward.length > 0 &&
                          ward?.map((item) => (
                            <MenuItem key={item.ward_id} value={item.ward_id}>
                              {item.ward_name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Số nhà, đường/phố"
                      fullWidth
                      type="text"
                      variant="outlined"
                      required
                      sx={{ marginTop: '32px' }}
                      {...register('address', {
                        required: takeOrder === 0,
                      })}
                      error={!!errors?.address?.message}
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
              {...register('note')}
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
          <Invoice cart={cartReducer} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
