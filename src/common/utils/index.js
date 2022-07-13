import StarIcon from '@mui/icons-material/Star';
import { toast } from 'react-toastify';

/**
 * @author MH
 * @param {number} star
 * @returns arr
 */
export const renderStars = (star) => {
  const TOTAL_STAR = 5;
  let listStar = [];
  const disableStar = TOTAL_STAR - star;

  for (let i = 0; i < star; i++) {
    if (i === 0) {
      listStar.push(<StarIcon color="warning" fontSize="large" />);
      continue;
    }
    listStar.push(
      <StarIcon color="warning" fontSize="large" className="ml-2px" />,
    );
  }
  for (let i = 0; i < disableStar; i++) {
    listStar.push(<StarIcon fontSize="large" className="gray ml-2px" />);
  }
  return listStar;
};

export const showToastMsg = (type = 'info', msg, options = {}) => {
  toast[type](msg, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    ...options,
  });
};

/**
 * @author MH
 * @param {*} number
 * @param {*} separate
 * @returns {string} currency
 */
export function numberWithCommas(number, separate = '.') {
  return number
    ?.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separate);
}

/**
 * @author MH
 * @param {*} timestamp
 * @returns {string} dd/MM/YYYY HH:mm
 */
export function formatDateTime(timestamp) {
  const m = new Date(timestamp);
  const dateString =
    ('0' + m.getDate()).slice(-2) +
    '/' +
    ('0' + (m.getMonth() + 1)).slice(-2) +
    '/' +
    m.getFullYear() +
    ' - ' +
    ('0' + m.getHours()).slice(-2) +
    ':' +
    ('0' + m.getMinutes()).slice(-2);

  return dateString;
}

/**
 *
 */
export function showTextOrderStatus(shipMethod, statusCode) {
  let status = '';
  if (shipMethod === 0) {
    switch (statusCode) {
      case 0:
        status = 'Đang xử lý';
        break;
      case 1:
        status = 'Đã xác nhận';
        break;
      case 2:
        status = 'Đang giao hàng';
        break;
      case 3:
        status = 'Đã thanh toán';
        break;
      default:
        status = 'Đang xử lý';
        break;
    }
  } else {
    switch (statusCode) {
      case 0:
        status = 'Đang xử lý';
        break;
      case 1:
        status = 'Đã xác nhận';
        break;
      case 2:
        status = 'Đã thanh toán';
        break;
      default:
        status = 'Đang xử lý';
        break;
    }
  }
  return status;
}
