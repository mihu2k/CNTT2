import classNames from 'classnames/bind';
import Header from '~/components/layout/components/header/header.component';
import Sidebar from './sidebar/side-bar.component';
import Footer from './footer/footer.component';
import styles from './default-layout.css';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
