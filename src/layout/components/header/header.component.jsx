import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUploadAlt,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSignIn,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './header.css';
import Button from '~/components/button';
import images from '~/assets/images';
import Menu from '~/components/popper/menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/icons';
import Image from '~/components/image';
import Search from '../search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
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
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile ',
            to: '/@Vuong',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
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
                    <Link
                        to={config.routes.home}
                        className={cx('header-logo-link')}
                    >
                        <img src={images.logo} alt="logo" />
                    </Link>
                </div>

                <Search />

                <div className={cx('header-action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx('header-action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx('header-action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('header-badge')}>
                                        12
                                    </span>
                                </button>
                            </Tippy>
                            <Tippy
                                content="Upload Video"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx('header-action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                leftIcon={
                                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                                }
                            >
                                Upload
                            </Button>
                            <Button
                                primary
                                leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('header-user-avatar')}
                                src="https://scontent.fpnh22-4.fna.fbcdn.net/v/t39.30808-6/283042525_3127793060792907_687868091453720612_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Rb-K6yhJPTgAX-O616B&_nc_oc=AQmcUy4w4YvlLxjDH5ajep8PoX6v2GsNS9uXyXlAX1ALurHcBcTcBm_AdSts2COJt3Q&_nc_ht=scontent.fpnh22-4.fna&oh=00_AT_SOZqoutbFDRP5izSTy3MyoVrEJuzuoYu7EWIbew2ZTQ&oe=62B1C800"
                                alt="Pham Quoc Vuong"
                            />
                        ) : (
                            <div className={cx('header-more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
