import { Button, Grid, Paper, TextField } from '@mui/material';
import { useStyles } from './reset-password.style';
import Header from '~/components/login-form/header-login';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { resetPasswordRequest } from '~/redux/actions/user.action';

const schema = yup.object().shape({
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

function ResetPassword() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const dataSubmit = { ...data, userId, token };
    dispatch(resetPasswordRequest(dataSubmit));
  };

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
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              className={classes.input}
              label="Mật khẩu mới"
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
              label="Xác nhận mật khẩu mới"
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
              className={classes.mainButton}
            >
              Lưu mật khẩu
            </Button>

            <Button
              fullWidth
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

export default ResetPassword;
