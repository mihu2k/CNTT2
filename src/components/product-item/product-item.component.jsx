import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/image';
import { Truncate } from '../truncate';
import styles from './product-item.css';

const cx = classNames.bind(styles);

export default function ProductItem({ data, onClick }) {
  return (
    <Link
      to={`/product/${data.slug}`}
      onClick={onClick}
      className={cx('account-item-wrapper')}
    >
      <Image
        alt={data.name}
        src={`${process.env.REACT_APP_API_BASE_URL}${data?.colors[0]?.image}`}
        className={cx('account-item-avatar')}
      />
      <div className={cx('account-item-info')}>
        <p className={cx('account-item-name')}>
          <Truncate line={1} variant="p" fontWeight={600} paddingRight="8px">
            {data.name}
          </Truncate>
          <FontAwesomeIcon
            className={cx('account-item-verify')}
            icon={faCheckCircle}
          />
        </p>
        <span className={cx('account-item-username')}>{data.brand}</span>
      </div>
    </Link>
  );
}
