/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import cx from 'classnames';
import { IconButton, Typography } from '@mui/material';
import { useStyles } from './card-horizontal.style';
import { InputQuantity } from '../input-quantity';
import Tippy from '@tippyjs/react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Truncate } from '../truncate';
import { numberWithCommas } from '~/common/utils';
import { useDispatch } from 'react-redux';
import {
  actionQuantityCartRequest,
  changeQuantityCartRequest,
  deleteCartRequest,
} from '~/redux/actions/cart.action';

export function CardHorizontal({ product }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickChange = (type, _quantity) => {
    dispatch(actionQuantityCartRequest({ ...product }, type));
  };

  const handleChange = (quantity) => {
    dispatch(changeQuantityCartRequest({ ...product }, quantity));
  };

  const handleDeleteItemCart = () => {
    dispatch(deleteCartRequest({ ...product }));
  };

  return (
    <div className={cx('d-f', classes.box)}>
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}${product?.colorImage}`}
        alt={product.name}
        className={classes.imgProd}
      />
      <div className={classes.wrapInfo}>
        <div className={cx('d-f', classes.info)}>
          <div style={{ maxWidth: '100%' }}>
            <Truncate
              variant="h5"
              component="h5"
              line={1}
              fontSize={20}
              fontWeight={600}
            >
              {product.name}
            </Truncate>
            <Typography
              variant="p"
              component="p"
              style={{ fontSize: '1.6rem' }}
            >
              Màu sắc: {product.colorName}
            </Typography>
          </div>
          <Typography
            variant="p"
            component="p"
            style={{
              fontWeight: 'bold',
              fontSize: '2rem',
              marginRight: '14px',
            }}
          >
            {numberWithCommas(product.price)} ₫
          </Typography>
        </div>
        <div className={cx('d-f', classes.action, 'mt-16px')}>
          <div>
            <InputQuantity
              quantityProps={product.quantity}
              onClickChange={handleClickChange}
              onChange={handleChange}
            />
          </div>
          <Tippy
            content={`Xóa ${product.name} (${product.colorName}) khỏi giỏ hàng`}
          >
            <IconButton
              aria-label="delete-product"
              style={{ marginLeft: '8px' }}
              onClick={handleDeleteItemCart}
            >
              <DeleteIcon style={{ fontSize: '22px', color: '#000' }} />
            </IconButton>
          </Tippy>
        </div>
      </div>
    </div>
  );
}
