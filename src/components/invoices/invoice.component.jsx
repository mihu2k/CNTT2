import { Button } from '@mui/material';
import cx from 'classnames';

import { useStyles } from './invoice.style';

import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { Truncate } from '../truncate';
import { numberWithCommas } from '~/common/utils';

export default function Invoice({ cart }) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.invoiceWrapper}>
      <div className={classes.invoiceHeader}>
        <div className={classes.invoiceHeaderTitle}>
          Đơn hàng (
          <span className={classes.quatityProduct}>
            {cart.products?.length}
          </span>
          &nbsp;sản phẩm)
        </div>

        <Link to={config.routes.cart}>
          <Button
            variant="text"
            sx={{ color: '#000', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            Chỉnh sửa
          </Button>
        </Link>
      </div>
      <div className={classes.invoiceBody}>
        {cart.products?.length > 0
          ? cart.products?.map((product, index) => (
              <div className={classes.invoiceProductInfo} key={index}>
                <div className="d-f">
                  <img
                    className={classes.invoiceImg}
                    src={`${process.env.REACT_APP_API_BASE_URL}${product?.colorImage}`}
                    alt={product.name}
                  />
                  <div className={cx(classes.invoiceInfo, 'ml-16px')}>
                    <h3 className={classes.invoiceInfoName}>{product.name}</h3>
                    <div className={cx(classes.invoiceInfoDesc, 'colorInfo')}>
                      <span>Màu sắc</span>
                      <span
                        className={classes.cicle}
                        style={{ backgroundColor: product.colorValue }}
                      />
                    </div>
                    <div className={classes.invoiceInfoDesc}>
                      <span>Số lượng</span>
                      <span>{product.quantity}</span>
                    </div>
                    <div className={classes.invoiceInfoDesc}>
                      <span>Thương hiệu</span>
                      <span className={classes.invoiceInfoBrand}>
                        {product?.brand ?? 'RENE'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={classes.invoiceInfoDesc}>
                  <span className={classes.invoiceInfoPrice}>
                    {numberWithCommas(product.price)}&nbsp;&#8363;
                  </span>
                </div>
              </div>
            ))
          : null}

        <ul style={{ marginTop: '24px' }}>
          <li className={classes.moneyInfoList}>
            <span className={classes.moneyInfo}>Tạm tính</span>
            <span className={classes.moneyDetail}>
              {numberWithCommas(
                cart.products.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0,
                ),
              )}
              &nbsp;&#8363;
            </span>
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
              {numberWithCommas(
                cart.products.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0,
                ),
              )}
              &nbsp;&#8363;
            </span>
          </li>
        </ul>
        <span>(Đã bao gồm VAT nếu có)</span>
      </div>
    </div>
  );
}
