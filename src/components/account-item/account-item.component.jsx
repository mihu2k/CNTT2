import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './account-item.css';
import Image from '~/components/image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('account-item-wrapper')}>
            <Image
                alt={data.full_name}
                src={data.avatar}
                className={cx('account-item-avatar')}
            />
            <div className={cx('account-item-info')}>
                <p className={cx('account-item-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('account-item-verify')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <span className={cx('account-item-username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;
