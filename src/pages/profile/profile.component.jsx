import { useStyles } from './profile.style';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import httpRequest from '~/common/utils/httpRequest';
import { checkTokenRequest } from '~/redux/actions/auth.action';

function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth: authReducer } = useSelector((state) => state);
  const cart = JSON.parse(localStorage.getItem('cart'));

  console.log(authReducer, 'authReducer');

  React.useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem('profile'))?.accessToken;
      token && dispatch(checkTokenRequest(token, navigate));
    })();
  }, []);

  console.log(authReducer, 'authReducer profile');

  return (
    <div>
      <div className={classes.infoProfile}>
        <span className={classes.infoProfileAvatar}>
          <PersonOutlineIcon className={classes.infoProfileAvatarIcon} />
        </span>
        <div>
          <div className={classes.infoUserName}>
            {authReducer.profile?.full_name}
          </div>
          <div className={classes.infoUserEmail}>
            {authReducer.profile?.email}
          </div>
          <Link
            to={config.routes.profileSettings}
            className={classes.infoUserLink}
          >
            Thiết lập hồ sơ
          </Link>
        </div>
      </div>
      <div className={classes.infoDashboardComer}>
        <div className={classes.infoDashboardAddress}>
          <span className={classes.dashboardAddressTitle}>
            Thông tin cá nhân
          </span>

          <div>
            <span className={classes.addressUsername}>
              {authReducer.profile?.full_name}
            </span>
            <span className={classes.addressInfo}>
              {authReducer.profile?.email}
            </span>
          </div>
        </div>

        <div className={classes.infoDashboardPayment}>
          <span className={classes.dashboardPaymentTitle}>
            Thông tin thanh toán
          </span>
          <div className={classes.dashboardPaymentInfo}>
            Visa ** <span className={classes.PaymentNumber}>56</span>
            <span>
              <CreditScoreIcon className={classes.PaymentIcon} />
            </span>
          </div>
        </div>
      </div>
      <div className={classes.shopInfoPanels}>
        <Link to={'./'} className={cx(classes.shopInfoBox, 'separate')}>
          <span>
            <FavoriteBorderIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Danh sách yêu thích</span>
          <span className={classes.shopInfoBoxNumber}>0</span>
        </Link>
        <Link
          to={config.routes.order}
          className={cx(classes.shopInfoBox, 'separate')}
        >
          <span>
            <LocalShippingIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Theo dõi đơn hàng</span>
          <span className={classes.shopInfoBoxNumber}>0</span>
        </Link>
        <Link
          to={config.routes.cart}
          className={cx(classes.shopInfoBox, 'separate')}
        >
          <span>
            <ShoppingCartIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Sản phẩm giỏ hàng</span>
          <span className={classes.shopInfoBoxNumber}>{cart?.length ?? 0}</span>
        </Link>
        <Link to={config.routes.order} className={classes.shopInfoBox}>
          <span>
            <HistoryIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Sản phẩm của tôi</span>
          <span className={classes.shopInfoBoxNumber}>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
