import { Button, Grid, Paper, TextField } from '@mui/material';

import { useStyles } from './sign-up.style';

// import cx from 'classnames';

function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid>
        <Paper elevation={0} className={classes.paper}>
          <Grid align="center">
            <h1 className={classes.title}>Tạo René account của bạn</h1>
          </Grid>
          <Grid>
            <form className={classes.form}>
              <TextField
                className={classes.input}
                label="Email"
                fullWidth
                variant="standard"
                required
              />
              <TextField
                className={classes.input}
                label="Mật khẩu"
                fullWidth
                type="password"
                variant="standard"
                required
              />
              <TextField
                className={classes.input}
                label="Xác nhận mật khẩu"
                fullWidth
                type="password"
                variant="standard"
                required
              />
              <TextField
                className={classes.input}
                label="Họ"
                fullWidth
                type="text"
                variant="standard"
                required
              />
              <TextField
                className={classes.input}
                label="Tên"
                fullWidth
                type="text"
                variant="standard"
                required
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  color: '#fff',
                  backgroundColor: '#0381fe',
                  border: '1px solid #0381fe',
                  margin: '27px 0 20px 0',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                  },
                }}
              >
                Đăng ký
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
