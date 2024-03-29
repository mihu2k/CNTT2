import PropTypes from 'prop-types';
import Header from '~/layout/components/header';
import Footer from './footer';
import Container from '@mui/material/Container';

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
