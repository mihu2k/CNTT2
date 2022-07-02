import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import { useStyles } from './forget-password.style';
import Header from '~/components/login-form/header-login';

// import cx from 'classnames';

function ForgetPassword() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <Paper elevation={0} className={classes.paper}>
        <Grid align="left">
          <h1 className={classes.heading}>Đặt lại mật khẩu mới</h1>
          <span className={classes.subHeading}>
            Nhập email đăng ký tài khoản RENÉ của bạn, chúng tôi sẽ gửi cho bạn
            một email để thực hiện đặt lại mật khẩu cho tài khoản!
          </span>
        </Grid>
        <Grid>
          <form type="submit" className={classes.form}>
            <TextField
              className={classes.input}
              label="Email"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              className={classes.input}
              label="Mật khẩu mới"
              fullWidth
              type="password"
              variant="standard"
              required
            />
            <TextField
              className={classes.input}
              label="Xác nhận mật khẩu mới"
              fullWidth
              type="password"
              variant="standard"
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              className={classes.mainButton}
            >
              Tiếp tục
            </Button>
            <Button
              fullWidth
              type="submit"
              variant="outlined"
              className={classes.backButton}
            >
              Quay lại đăng nhập
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
}

export default ForgetPassword;
