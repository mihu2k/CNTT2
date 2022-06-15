import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './button.css';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event listeners when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((propsKey) => {
            if (
                propsKey.startsWith('on') &&
                typeof props[propsKey] === 'function'
            ) {
                delete props[propsKey];
            }
        });
    }

    const classes = cx('button-wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        disabled,
        small,
        large,
        text,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('button-icon')}>{leftIcon}</span>}
            <span className={cx('button-title')}>{children}</span>
            {rightIcon && <span className={cx('button-icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
