import { yupResolver } from '@hookform/resolvers/yup';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Loading from '~/components/loading/loading.component';
import config from '~/config';
import { loginRequest } from '~/redux/actions/auth.action';
import { useStyles } from '../login-form-common.style';

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập username/email.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu.')
    .min(6, 'Mật khẩu phải ít nhất 6 kí tự.'),
});

function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authReducer = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(loginRequest(data));
  };

  React.useEffect(() => {
    (() => {
      if (authReducer.status === 'success') {
        navigate(config.routes.home);
      }
    })();
  }, [authReducer.status]);

  return (
    <>
      {authReducer.status === 'pending' ? (
        <Loading />
      ) : (
        <div className={classes.wrapper}>
          <Grid>
            <Paper elevation={0} className={classes.paper}>
              <Grid align="center">
                <h1 className={classes.title}>
                  Đăng nhập René account của bạn
                </h1>
              </Grid>
              <Grid>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={classes.input}
                    label="Username/Email"
                    fullWidth
                    variant="standard"
                    {...register('email')}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                  />
                  <TextField
                    className={classes.input}
                    label="Mật khẩu"
                    fullWidth
                    type="password"
                    variant="standard"
                    {...register('password')}
                    error={!!errors?.password?.message}
                    helperText={errors?.password?.message}
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
      )}
    </>
  );
}

export default SignIn;
