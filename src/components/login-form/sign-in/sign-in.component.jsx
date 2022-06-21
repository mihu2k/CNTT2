import { Typography, Button, Grid, Paper, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useStyles } from '../login-form-common.style';
import { Link } from 'react-router-dom';

// import cx from 'classnames';

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid>
        <Paper elevation={0} className={classes.paper}>
          <Grid align="center">
            <h1 className={classes.title}>Đăng nhập René account của bạn</h1>
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
              <Typography
                fontWeight="600"
                fontSize={16}
                gutterBottom
                component="span"
                className={classes.forgetPassword}
              >
                <Link
                  to={'./forgetPassword'}
                  className={classes.forgetPassword}
                >
                  Quên mật khẩu?
                </Link>
              </Typography>
              <Button
                type="submit"
                fullWidth
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
                Đăng nhập
              </Button>

              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <GoogleIcon
                    sx={{
                      color: '#DB4437',
                      fontSize: '24px',
                    }}
                  />
                }
                sx={{
                  color: '#252525',
                  borderColor: '#fff',

                  '&:hover': {
                    borderColor: '#e8e8e8',
                    backgroundColor: '#fff',
                  },

                  '&:focus': {
                    borderColor: '#fff',
                    backgroundColor: '#fff',
                  },
                }}
              >
                Đăng nhập bằng Google
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignIn;
