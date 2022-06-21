import { useStyles } from './checkout.style';
import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// import image from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
// import cx from 'classnames';
import images from '~/assets/images';

function Checkout() {
  const classes = useStyles();
  const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
  return (
    <div>
      <header className={classes.header}>
        <Link to="./">
          <ArrowBackIosIcon />
          <Typography variant="span" component="span">
            Tiếp tục mua hàng
          </Typography>
        </Link>
        <Link to={config.routes.home}>
          <img src={images.logo} alt="logo" />
        </Link>
        <Typography variant="div" component="div">
          <LocalPhoneIcon />
          Hỗ trợ: 19006017
        </Typography>
      </header>

      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Thông tin vận chuyển
          </Typography>
          <TextField label="Email" fullWidth variant="standard" required />
          <TextField
            label="Mật khẩu"
            fullWidth
            type="password"
            variant="standard"
            required
          />
          <TextField
            label="Xác nhận mật khẩu"
            fullWidth
            type="password"
            variant="standard"
            required
          />
          <TextField
            label="Họ"
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
          <TextField
            label="Tên"
            fullWidth
            type="text"
            variant="standard"
            required
          />

          <Button
            type="submit"
            className={classes.modalButton}
            variant="contained"
            sx={{
              color: '#fff',
              backgroundColor: '#000',
              minWidth: '150px',
            }}
          >
            Tiến hành thanh toán
          </Button>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.invoiceHeader}>
            <div>
              Đơn hàng (<span className={classes.quatityProduct}>1</span> sản
              phẩm)
            </div>
            <Button variant="text">Chỉnh sửa</Button>
          </div>
          <div className={classes.invoiceBody}>
            <img
              src="https://cdn.jblstore.com.vn/UploadTemp/7960173a-1c8a-4c13-b761-f6d49a9713df.jpg"
              alt="img-product-checkout-invoice"
            />
            <div>
              <h3>JBL TUNE110</h3>
              <div>
                <span>Màu sắc</span>
                <span></span>
              </div>
              <div>
                <span>Số lượng</span>
                <span>1</span>
              </div>
              <div>
                <span>Giá bán</span>
                <span>390.000 </span>
              </div>
            </div>
            <ul>
              <li>
                <span class="money-info">Tạm tính</span>
                <span class="money-detail">390.000 &#8363;</span>
              </li>
              <li>
                <span class="money-info">Mã giảm giá</span>
                <span class="money-detail">0 &#8363;</span>
              </li>
              <li>
                <span class="money-info">Phí vận chuyển</span>
                <span class="money-detail">0 &#8363;</span>
              </li>
            </ul>

            <ul>
              <li>
                <span class="money-info last-detail">Tạm tính</span>
                <span class="money-detail last-detail">390.000 &#8363;</span>
              </li>
            </ul>
            <span>(Đã bao gồm VAT nếu có)</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
