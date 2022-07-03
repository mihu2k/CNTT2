import { Button, Grid, Paper, TextField } from '@mui/material';

import { useStyles } from './reset-password.style';
import Header from '~/components/login-form/header-login';

// import cx from 'classnames';

function ResetPassword() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <Paper elevation={0} className={classes.paper}>
        <Grid align="left">
          <h1 className={classes.heading}>Đặt lại mật khẩu mới</h1>
          <span className={classes.subHeading}>
            Vui lòng thực hiện đổi mật khẩu mới của bạn bên dưới
          </span>
        </Grid>
        <Grid>
          <form type="submit" className={classes.form}>
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
              Lưu mật khẩu
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

export default ResetPassword;
