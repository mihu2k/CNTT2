import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleQuestion,
  faEarthAsia,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import config from '~/config';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import images from '~/assets/images';
import Image from '~/components/image';
import Menu from '~/components/popper/menu';
import Search from '../search';
import styles from './header.css';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Đăng nhập/Sign-up',
    to: '/login',
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
];

const generalIconStyle = {
  width: '2.6rem',
  height: '2.6rem',
};

function Header() {
  const currentUser = JSON.parse(localStorage.getItem('profile'))?.data;

  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //handle change language
        break;
      default:
    }
  };

  const menu = [...MENU_ITEMS];
  if (currentUser) menu.shift();
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    ...menu,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('header-wrapper')}>
      <div className={cx('header-inner')}>
        <div className={cx('header-logo')}>
          <Link to={config.routes.home} className={cx('header-logo-link')}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>

        <Search />

        <div className={cx('header-action')}>
          <Tippy content="Giỏ hàng" placement="bottom" delay={[0, 100]}>
            <button className={cx('header-action-btn')}>
              <ShoppingCartOutlinedIcon style={generalIconStyle} />
              <span className={cx('header-badge')}>1</span>
            </button>
          </Tippy>

          <Menu
            items={!!currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {!!currentUser ? (
              <Image
                className={cx('header-user-avatar')}
                src={
                  currentUser.media.google?.picture
                    ? currentUser.media.google?.picture
                    : `${process.env.REACT_APP_API_BASE_URL}${currentUser.avatar}`
                }
                alt={currentUser.full_name ?? 'Avatar'}
              />
            ) : (
              // <div className={cx('header-more-btn')}>
              //   <FontAwesomeIcon icon={faEllipsisVertical} />
              // </div>
              <button className={cx('header-action-btn')}>
                <FontAwesomeIcon
                  icon={faUserRegular}
                  style={{
                    width: '2.2rem',
                    height: '2.2rem',
                  }}
                />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
