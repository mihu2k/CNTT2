import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useStyles } from './sign-up.style';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '~/redux/actions/auth.action';
import Loading from '~/components/loading/loading.component';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Vui lòng nhập tên đăng nhập.')
    .min(4, 'Tên đăng nhập phải ít nhất 4 kí tự.'),
  email: yup
    .string()
    .required('Vui lòng nhập email.')
    .email('Email không đúng định dạng.'),
  fullName: yup.string().required('Vui lòng nhập họ và tên.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu.')
    .min(6, 'Mật khẩu phải ít nhất 6 kí tự.'),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu.')
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Không trùng khớp với mật khẩu.'),
    }),
});

function SignUp() {
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
    const transformData = {
      username: data.username,
      email: data.email,
      full_name: data.fullName,
      password: data.password,
    };
    dispatch(registerRequest(transformData));
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
          <Paper elevation={0} className={classes.paper}>
            <Grid align="center">
              <Typography
                component="span"
                variant="h3"
                className={classes.title}
              >
                Tạo René account của bạn
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="form"
                component="form"
                className={classes.form}
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  className={classes.input}
                  label="User name"
                  fullWidth
                  variant="standard"
                  required
                  {...register('username')}
                  error={!!errors?.username?.message}
                  helperText={errors?.username?.message}
                />
                <TextField
                  className={classes.input}
                  label="Email"
                  fullWidth
                  variant="standard"
                  required
                  {...register('email')}
                  error={!!errors?.email?.message}
                  helperText={errors?.email?.message}
                />
                <TextField
                  className={classes.input}
                  label="Họ & Tên"
                  fullWidth
                  type="text"
                  variant="standard"
                  required
                  {...register('fullName')}
                  error={!!errors?.fullName?.message}
                  helperText={errors?.fullName?.message}
                />
                <TextField
                  className={classes.input}
                  label="Mật khẩu"
                  fullWidth
                  type="password"
                  variant="standard"
                  required
                  {...register('password')}
                  error={!!errors?.password?.message}
                  helperText={errors?.password?.message}
                />
                <TextField
                  className={classes.input}
                  label="Xác nhận mật khẩu"
                  fullWidth
                  type="password"
                  variant="standard"
                  required
                  {...register('confirmPassword')}
                  error={!!errors?.confirmPassword?.message}
                  helperText={errors?.confirmPassword?.message}
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
      )}
    </>
  );
}

export default SignUp;
