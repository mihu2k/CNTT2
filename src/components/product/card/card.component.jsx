/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import cx from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { numberWithCommas, renderStars } from '~/common/utils';
import { Truncate } from '~/components/truncate';
import { useStyles } from './card.style';

function ProductCard({ product }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [infoByColor, setInfoByColor] = React.useState(product?.colors[0]);

  const handleClickColor = (color) => {
    const index = product?.colors?.findIndex((item) => item.value === color);
    setInfoByColor(product?.colors[index > -1 ? index : 0]);
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  React.useEffect(() => {
    setInfoByColor(product?.colors[0]);
  }, [product]);

  return (
    <>
      <Card className={classes.wrapper}>
        <Typography
          className={classes.wrapImgProd}
          variant="div"
          component={Link}
          to={`/product/${product.slug}`}
        >
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}${infoByColor.image}`}
            alt={product.name}
            height="160"
            width="160"
            className={classes.imgProd}
          />
        </Typography>
        <CardContent className={classes.cardContent}>
          <Truncate
            fontFamily="SamsungOne"
            fontWeight="600"
            fontSize={16}
            gutterBottom
            variant="h4"
            component="div"
            className={cx('f-grow-1', classes.prodName)}
            line={2}
          >
            {product.name}
          </Truncate>
          <div className={cx('f-shrink-0', classes.wrapColor)}>
            <div>
              <span style={{ fontWeight: 600 }}>Màu sắc:</span>
              <span className="pl-4px">{infoByColor.name}</span>
            </div>
            <div className={classes.wrapChooseColor}>
              {product.colors.length > 0
                ? product.colors.map((color) => (
                    <div
                      key={color.value}
                      className={cx('boxChooseColor', classes.wrapCircleBox)}
                      style={
                        color.value === infoByColor.value
                          ? { border: '1px solid #333' }
                          : { border: '1px solid transparent' }
                      }
                    >
                      <div
                        className={cx(classes.circleBox)}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleClickColor(color.value)}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className={cx('f-shrink-0', classes.wrapPrice)}>
            <div>{numberWithCommas(product.price)} ₫</div>
            <div className="mt-20px">{renderStars(4)}</div>
          </div>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button size="large" variant="contained" fullWidth>
            Mua ngay
          </Button>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            onClick={() => handleRedirect(`/product/${product.slug}`)}
          >
            Tìm hiểu thêm
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
