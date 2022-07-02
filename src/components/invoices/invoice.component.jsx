// import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import cx from 'classnames';

import { useStyles } from './invoice.style';

import { Link } from 'react-router-dom';

function Invoice() {
  const classes = useStyles();
  return (
    <div className={classes.invoiceWrapper}>
      <div className={classes.invoiceHeader}>
        <div className={classes.invoiceHeaderTitle}>
          Đơn hàng (<span className={classes.quatityProduct}>1</span> sản phẩm)
        </div>

        {/* chuyển trang về giỏi hàng */}
        <Link to={'./'}>
          <Button
            variant="text"
            sx={{ color: '#000', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            Chỉnh sửa
          </Button>
        </Link>
      </div>
      <div className={classes.invoiceBody}>
        <div className={classes.invoiceProductInfo}>
          <img
            className={classes.invoiceImg}
            src="https://cdn.jblstore.com.vn/UploadTemp/7960173a-1c8a-4c13-b761-f6d49a9713df.jpg"
            alt="img-product-checkout-invoice"
          />
          <div className={classes.invoiceInfo}>
            <h3 className={classes.invoiceInfoName}>JBL TUNE110</h3>
            <div className={cx(classes.invoiceInfoDesc, 'colorInfo')}>
              <span>Màu sắc</span>
              <span className={classes.cicle}></span>
            </div>
            <div className={classes.invoiceInfoDesc}>
              <span>Số lượng</span>
              <span>1</span>
            </div>
            <div className={classes.invoiceInfoDesc}>
              <span>Thương hiệu</span>
              <span className={classes.invoiceInfoBrand}>JBL</span>
            </div>
          </div>
          <div className={classes.invoiceInfoDesc}>
            <span className={classes.invoiceInfoPrice}>1.390.000 &#8363;</span>
          </div>
        </div>

        <ul>
          <li className={classes.moneyInfoList}>
            <span className={classes.moneyInfo}>Tạm tính</span>
            <span className={classes.moneyDetail}>1.390.000 &#8363;</span>
          </li>
          <li className={classes.moneyInfoList}>
            <span className={classes.moneyInfo}>Mã giảm giá</span>
            <span className={classes.moneyDetail}>0 &#8363;</span>
          </li>
          <li className={classes.moneyInfoList}>
            <span className={classes.moneyInfo}>Phí vận chuyển</span>
            <span className={classes.moneyDetail}>0 &#8363;</span>
          </li>
        </ul>

        <ul>
          <li className={cx(classes.moneyInfoList, 'detail')}>
            <span className={cx(classes.moneyInfo, 'lastDetail')}>
              Tổng giá
            </span>
            <span className={cx(classes.moneyDetail, 'lastDetail')}>
              1.390.000 &#8363;
            </span>
          </li>
        </ul>
        <span>(Đã bao gồm VAT nếu có)</span>
      </div>
    </div>
  );
}

// Invoice.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default Invoice;
