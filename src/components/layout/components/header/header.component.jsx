import classNames from 'classnames/bind';
import styles from './header.css';

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <div className={cx('header')}>Header</div>
     );
}

export default Header;