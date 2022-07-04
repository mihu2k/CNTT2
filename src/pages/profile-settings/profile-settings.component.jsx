import * as React from 'react';
import { useStyles } from './profile-settings.style';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import CreditScoreIcon from '@mui/icons-material/CreditScore';

import cx from 'classnames';

function ProfileSettings() {
  const classes = useStyles();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '750px',
    maxHeight: '640px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
  };

  const [modalOpen, setModal] = React.useState(false);

  const openModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal('');
  };

  return (
    <div>
      <h1 className={classes.settingPageTitle}>Thiết lập hồ sơ</h1>
      <div className={classes.infoDashboardComer}>
        <div className={classes.infoDashboardAddress}>
          <div className={classes.dashboardHeader}>
            <span className={classes.dashboardAddressTitle}>
              Thông tin của tôi
            </span>

            <Typography
              variant="span"
              component="span"
              data-modal="modal-info"
              onClick={openModal}
              className={classes.dashboardEdit}
            >
              Chỉnh sửa
            </Typography>
          </div>

          <div>
            <p className={classes.addressUsername}>Vuong Pham Quoc</p>
            <p className={classes.addressInfo}>
              200/12/6, Lê Văn Lương, Phường Tân Hưng, Quận 7
            </p>
            <p className={classes.addressInfo}>vuongnguyen30702@gmail.com</p>
            <p className={classes.addressInfo}>0369830702</p>
          </div>
        </div>

        <div className={classes.infoDashboardPayment}>
          <div className={classes.dashboardHeader}>
            <span className={classes.dashboardPaymentTitle}>
              Thông tin thanh toán
            </span>
            <Typography
              variant="span"
              component="span"
              data-modal="modal-payment"
              onClick={openModal}
              className={classes.dashboardEdit}
            >
              Chỉnh sửa
            </Typography>
          </div>

          <div className={classes.dashboardPaymentInfo}>
            Visa ** <span className={classes.PaymentNumber}>56</span>
            <span className={classes.PaymentIcon}>
              <CreditScoreIcon
                sx={{
                  fontSize: '1.8rem',
                }}
              />
            </span>
          </div>
          <p className={classes.dashboardPaymentInfo}>Hết hạn: 07/2024</p>
        </div>
        {/* Modal user info  */}
        <Modal
          open={modalOpen === 'modal-info'}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modalContainer} sx={style}>
            <Typography
              id="modal-modal-title"
              className={classes.modalHeader}
              variant="h1"
              component="h1"
            >
              Chỉnh sửa địa chỉ
              <Typography
                variant="span"
                component="span"
                onClick={closeModal}
                className={classes.modalClose}
              >
                <CloseIcon sx={{ fontSize: '2.5rem', cursor: 'pointer' }} />
              </Typography>
            </Typography>
            <Typography
              id="modal-modal-form"
              className={classes.modalForm}
              variant="form"
              component="form"
              sx={{ mt: 2 }}
            >
              <TextField
                label="Họ tên"
                fullWidth
                type="text"
                variant="standard"
                required
              />

              <TextField
                label="Địa chỉ"
                fullWidth
                type="text"
                variant="standard"
                required
              />
              <TextField
                label="Số điện thoại"
                fullWidth
                type="tel"
                variant="standard"
                required
              />
              <TextField
                label=""
                fullWidth
                type="text"
                variant="standard"
                required
              />
              <Typography
                id="modal-modal-btn"
                variant="div"
                component="div"
                sx={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  className={classes.modalButton}
                  onClick={closeModal}
                  sx={{
                    color: '#000',
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    minWidth: '150px',
                  }}
                >
                  Hủy
                </Button>
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
                  Lưu
                </Button>
              </Typography>
            </Typography>
          </Box>
        </Modal>

        {/* Modal user payment info  */}
        <Modal
          open={modalOpen === 'modal-payment'}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={cx(classes.modalPayment, classes.modalContainer)}
            sx={style}
          >
            <Typography
              id="modal-modal-title"
              className={classes.modalHeader}
              variant="h1"
              component="h1"
            >
              Cập nhật thông tin thanh toán
              <Typography
                variant="span"
                component="span"
                onClick={closeModal}
                className={classes.modalClose}
              >
                <CloseIcon sx={{ fontSize: '2.5rem', cursor: 'pointer' }} />
              </Typography>
            </Typography>
            <Typography
              id="modal-modal-form"
              className={classes.modalForm}
              variant="form"
              component="form"
              sx={{ mt: 2 }}
            >
              <TextField
                label="Loại thẻ Visa/MasterCard/JCB"
                fullWidth
                type="text"
                variant="standard"
                required
              />
              <TextField
                label="Tên chủ thẻ"
                fullWidth
                type="text"
                variant="standard"
                required
              />
              <TextField
                label="Số thẻ"
                fullWidth
                type="number"
                variant="standard"
                required
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 16);
                }}
              />
              <InputLabel id="demo-simple-select-label">
                Ngày hết hạn
              </InputLabel>
              <TextField fullWidth type="month" variant="standard" required />
              <TextField
                label="Mã bảo mật"
                fullWidth
                type="number"
                variant="standard"
                required
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 3);
                }}
              />
              <Typography
                id="modal-modal-btn"
                variant="div"
                component="div"
                sx={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  className={classes.modalButton}
                  onClick={closeModal}
                  sx={{
                    color: '#000',
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    minWidth: '150px',
                  }}
                >
                  Hủy
                </Button>
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
                  Lưu
                </Button>
              </Typography>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default ProfileSettings;
