import PropTypes from 'prop-types';
import Footer from '~/layout/defaultlayout/footer';

import Container from '@mui/material/Container';

function FooterOnly({ children }) {
  return (
    <div>
      <Container className="mt-header" maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

FooterOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterOnly;
