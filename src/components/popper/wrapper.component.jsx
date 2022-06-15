import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './popper.css';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('popper-wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired, 
    className: PropTypes.string,
}

export default Wrapper;
