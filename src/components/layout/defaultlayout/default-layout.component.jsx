import classNames from 'classnames/bind';
import Header from '~/components/layout/components/header/header.component';
import Sidebar from './sidebar/side-bar.component';
import Footer from './footer/footer.component';
import styles from './default-layout.css';
import Container from '@mui/material/Container';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Container maxWidth="l">{children}</Container>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
