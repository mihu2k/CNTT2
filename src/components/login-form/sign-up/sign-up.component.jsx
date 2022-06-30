import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

import { useStyles } from './sign-up.style';

// import cx from 'classnames';

function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper elevation={0} className={classes.paper}>
        <Grid align="center">
          <Typography
            component="span"
            variant="h3"
            sx={{
              margin: '12px 0 32px',
              color: '#252525',

              lineHeight: 'normal',
              fontWeight: 'bold',
            }}
          >
            Tạo René account của bạn
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="form" component="span" className={classes.form}>
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
          </Typography>
        </Grid>
      </Paper>
    </div>
  );
}

export default SignUp;
