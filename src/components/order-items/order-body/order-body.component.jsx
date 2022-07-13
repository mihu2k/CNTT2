import { useStyles } from './order-body.style';
import { Typography } from '@mui/material';

import cx from 'classnames';
import { numberWithCommas } from '~/common/utils';
import { Truncate } from '~/components/truncate';

function OrderBody(props) {
  const { product } = props;
  const classes = useStyles();

  return (
    <div className={cx(classes.wrapper, props)}>
      <Typography variant="div" component="div" className={classes.orderBody}>
        <img
          className={classes.orderProductImg}
          src={`${process.env.REACT_APP_API_BASE_URL}${product?.productId?.colorImage}`}
          alt={product?.productId?.productId?.name}
        />

        <Typography
          variant="div"
          component="div"
          className={classes.orderProductInfo}
        >
          <Truncate
            line={2}
            variant="span"
            component="span"
            fontWeight={600}
            lineHeight={1.3}
            className={classes.orderProductName}
          >
            {product?.productId?.productId?.name}
          </Truncate>
          <span
            className="d-f"
            style={{
              alignItems: 'center',
            }}
          >
            Màu:&nbsp;<span>{product?.productId?.colorName}</span>
            &nbsp;&nbsp;
            <span
              className={classes.circleColor}
              style={{ backgroundColor: product?.productId?.colorValue }}
            />
          </span>
          <span>
            Số lượng:&nbsp;<span>{product?.quantity}</span>
          </span>
          <span>
            Giá sản phẩm:&nbsp;
            <span>
              {numberWithCommas(product?.price)}
              &nbsp;&#8363;
            </span>
          </span>
        </Typography>
      </Typography>
    </div>
  );
}

export default OrderBody;
