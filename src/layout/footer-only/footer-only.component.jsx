import PropTypes from 'prop-types';
import Footer from '~/layout/defaultlayout/footer';
import Header from '~/layout/components/header-simple';

import Container from '@mui/material/Container';

function FooterOnly({ children }) {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </div>
  );
}

FooterOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterOnly;
