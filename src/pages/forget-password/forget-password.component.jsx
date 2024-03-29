import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Header from '~/components/login-form/header-login';
import { resetPasswordConfirmRequest } from '~/redux/actions/user.action';
import { useStyles } from './forget-password.style';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập email.')
    .email('Email không đúng định dạng.'),
});

function ForgetPassword() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem('profile'))?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(resetPasswordConfirmRequest(data));
  };

  React.useEffect(() => {
    if (currentUser) navigate(-1, { replace: true });
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <Paper elevation={0} className={classes.paper}>
        <Grid align="left">
          <h1 className={classes.heading}>Quên mật khẩu?</h1>
          <span className={classes.subHeading}>
            Nhập email đăng ký tài khoản RENÉ của bạn, chúng tôi sẽ gửi cho bạn
            một email để thực hiện đặt lại mật khẩu cho tài khoản!
          </span>
        </Grid>
        <Grid>
          <form
            noValidate
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
          >
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
              type="button"
              variant="outlined"
              className={classes.backButton}
              onClick={() => navigate('/login')}
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
