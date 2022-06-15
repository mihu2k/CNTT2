import PropTypes from 'prop-types';
import './global-styles.css';
import './grid.css';
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
