import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layout/components/header';
import Sidebar from './sidebar';
import Footer from './footer';
import styles from './default-layout.css';
import Container from '@mui/material/Container';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Container className="mt-header" maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
