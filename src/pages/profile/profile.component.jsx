import { useStyles } from './profile.style';
import { Link } from 'react-router-dom';
import config from '~/config';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import cx from 'classnames';

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.infoProfile}>
        <span className={classes.infoProfileAvatar}>
          <PersonOutlineIcon className={classes.infoProfileAvatarIcon} />
        </span>
        <div>
          <div className={classes.infoUserName}>Vuong Pham</div>
          <div className={classes.infoUserEmail}>
            vuongnguyen30702@gmail.com
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
          <span className={classes.dashboardAddressTitle}>Địa chỉ</span>

          <div>
            <span className={classes.addressUsername}>Vuong Pham</span>
            <span className={classes.addressInfo}>
              200/12/6, Lê Văn Lương, Phường Tân Hưng, Quận 7
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
        <Link to={'./'} className={cx(classes.shopInfoBox, 'separate')}>
          <span>
            <LocalShippingIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Theo dõi đơn hàng</span>
          <span className={classes.shopInfoBoxNumber}>0</span>
        </Link>
        <Link to={'./'} className={cx(classes.shopInfoBox, 'separate')}>
          <span>
            <ShoppingCartIcon className={classes.shopInfoBoxIcon} />
          </span>
          <span className={classes.shopInfoBoxTitle}>Đơn hàng</span>
          <span className={classes.shopInfoBoxNumber}>0</span>
        </Link>
        <Link to={'./'} className={classes.shopInfoBox}>
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
