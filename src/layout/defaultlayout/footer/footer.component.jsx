import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './footer.css';
import { Place, Facebook, Instagram, Twitter } from '@mui/icons-material';
import config from '~/config';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-wrapper', 'grid wide')}>
        <div className={cx('footer-inner', 'row')}>
          <div className={cx('footer-block-item', 'col l-3 m-4 c-12')}>
            <span className={cx('footer-title')}>Cửa Hàng</span>
            <ul className={cx('footer-list-item')}>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Trang chủ"
                  to={config.routes.home}
                >
                  Trang chủ
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Sản phẩm"
                  to={config.routes.product}
                >
                  Sản phẩm
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <a
                  href="https://www.google.com/maps/place/CGV+Giga+Mall+Th%E1%BB%A7+%C4%90%E1%BB%A9c/@10.8275618,106.7210116,20.25z/data=!4m13!1m7!3m6!1s0x317528842f782221:0x3670cbfa60bbbcff!2zMjQyIFBo4bqhbSBWxINuIMSQ4buTbmcsIEhp4buHcCBCw6xuaCBDaMOhbmgsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!3b1!8m2!3d10.8276003!4d106.7212132!3m4!1s0x31752930d4f0ef63:0xfeffcc189deddb5b!8m2!3d10.8277882!4d106.7216702?hl=vi-VN"
                  title="Bản đồ"
                  target="_blank"
                  rel="noreferrer"
                  className={cx('footer-map-link')}
                >
                  Xem bản đồ của hàng
                </a>
                <Place sx={{ fontSize: 20, color: '#dc3a1a' }} />
              </li>
            </ul>
          </div>
          <div className={cx('footer-block-item', 'col l-3 m-4 c-12')}>
            <span className={cx('footer-title')}>Hỗ Trợ</span>
            <ul className={cx('footer-list-item')}>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Hỗ trợ trực tuyến"
                  to="/"
                >
                  Hỗ trợ trực tuyến
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Chính sách bảo hành"
                  to="/"
                >
                  Chính sách bảo hành
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Chính sách đổi trả sản phẩm"
                  to="/"
                >
                  Chính sách đổi trả sản phẩm
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Chính sách giao hàng"
                  to="/"
                >
                  Chính sách giao hàng
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Hình thức thanh toán"
                  to="/"
                >
                  Hình thức thanh toán
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('footer-block-item', 'col l-3 m-4 c-12')}>
            <span className={cx('footer-title')}>Thông Tin Mua Hàng</span>
            <ul className={cx('footer-list-item')}>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Điều khoản và điều kiện"
                  to="/"
                >
                  Điều khoản và Điều kiện
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Đắng ký thành viên"
                  to="/"
                >
                  Đăng ký thành viên
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Kiểm tra thời hạn bảo hành"
                  to="/"
                >
                  Kiểm tra thời hạn bảo hành
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Ưu đãi cho doanh nghiệp"
                  to="/"
                >
                  Ưa đãi cho doanh nghiệp
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('footer-block-item', 'col l-3 m-4 c-12')}>
            <span className={cx('footer-title')}>Về René</span>
            <ul className={cx('footer-list-item')}>
              <li className={cx('footer-item')}>
                <Link className={cx('footer-item-link')} title="Tin tức" to="/">
                  Tin tức
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Cam kết về môi trường"
                  to="/"
                >
                  Cam kết về môi trường
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Xem chương trình khuyến mãi"
                  to="/"
                >
                  Xem các chương trình khuyến mãi
                </Link>
              </li>
              <li className={cx('footer-item')}>
                <Link
                  className={cx('footer-item-link')}
                  title="Chính sách giao hàng"
                  to="/"
                >
                  Chính sách giao hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('footer-block-row')}>
          <ul className={cx('footer-list-item')}>
            <li className={cx('footer-item')}>
              <Link
                className={cx('footer-item-link')}
                title="Giới thiệu"
                to="/"
              >
                Giới thiệu
              </Link>
            </li>
            <li className={cx('footer-item')}>
              <Link
                className={cx('footer-item-link')}
                title="Tuyển dụng"
                to="/"
              >
                Tuyển dụng
              </Link>
            </li>
            <li className={cx('footer-item')}>
              <Link className={cx('footer-item-link')} title="Liên hệ" to="/">
                Liên hệ
              </Link>
            </li>
            <div className={cx('footer-contacts')}>
              <a
                href="facebook.com"
                title="Facebook"
                target="_blank"
                rel="noreferrer"
                className={cx('footer-social-icon', 'social-icon-facebook')}
              >
                <Facebook sx={{ fontSize: 20 }} />
              </a>
              <a
                href="instagram.com"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
                className={cx('footer-social-icon', 'social-icon-instagram')}
              >
                <Instagram sx={{ fontSize: 20 }} />
              </a>

              <a
                href="twitter.com"
                target="_blank"
                title="Twitter"
                rel="noreferrer"
                className={cx('footer-social-icon', 'social-icon-twitter')}
              >
                <Twitter sx={{ fontSize: 20 }} />
              </a>
            </div>
          </ul>
        </div>
        <div className={cx('footer-signature')}>
          <span className={cx('footer-copyright')}>
            2022 &copy; Bản quyền thuộc sở hữu René Việt Nam.
          </span>
          <span className={cx('footer-copyright', 'size-s')}>
            Địa chỉ: Tầng 6 TTTM Giga Mall, 240, 242 Đ. Phạm Văn Đồng, Hiệp Bình
            Chánh, Thủ Đức, Thành phố Hồ Chí Minh 700000, Việt Nam.
          </span>
          <span className={cx('footer-copyright', 'size-s')}>
            Điện thoại: 19006017
          </span>

          <p className={cx('footer-legal-links')}>
            <Link to="/" title="Điều khoản sử dụng">
              Điều khoản sử dụng
            </Link>
            <Link to="/" title="Quyền riêng tư">
              Quyền riêng tư
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
