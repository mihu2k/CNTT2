/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// Styles
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useStyles } from './product-detail.style';
// Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PowerIcon from '@mui/icons-material/Power';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// Components
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material';
import Tippy from '@tippyjs/react';
import cx from 'classnames';
import { useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { numberWithCommas, renderStars } from '~/common/utils';
import { Breadcrumb } from '~/components/breadcrumb';
import { InputQuantity } from '~/components/input-quantity';
import ReviewList, { ReviewForm } from '~/components/product/review';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlugRequest } from '~/redux/actions/product.action';
import { Truncate } from '~/components/truncate';

function ProductDetail() {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const descRef = React.useRef();

  const [isShowMore, setIsShowMore] = React.useState(false);
  const [isOpenFormRating, setIsOpenFormRating] = React.useState(false);
  const [infoByColor, setInfoByColor] = React.useState({});
  const [rating, setRating] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const { product: productReducer } = useSelector((state) => state);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowBackIosNewIcon />,
    nextArrow: <ArrowForwardIosIcon />,
  };

  const handleClickShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const handleClickOpenFormRating = () => {
    setIsOpenFormRating(!isOpenFormRating);
  };

  const getProductBySlug = (slug) => {
    dispatch(getProductBySlugRequest(slug));
  };

  const handleClickColor = (color) => {
    const index = productReducer.product?.colors?.findIndex(
      (item) => item.value === color,
    );
    setInfoByColor(productReducer.product?.colors[index > -1 ? index : 0]);
  };

  React.useEffect(() => {
    getProductBySlug(slug);
    setHeight(descRef.current.clientHeight);
  }, [slug]);

  React.useLayoutEffect(() => {
    setInfoByColor(productReducer.product?.colors[0]);
  }, [productReducer]);

  React.useLayoutEffect(() => {
    setRating((prev) => {
      const countRatings =
        productReducer.product?.comments.reduce(
          (rating, item) => rating + item.rating,
          0,
        ) ?? prev;
      return countRatings / productReducer.product?.comments?.length;
    });
  }, [productReducer.product?.comments]);

  console.log(location, 'LOCATION');

  return (
    <div className={classes.root}>
      <div className={classes.wrapBreadcrumb}>
        <Breadcrumb
          pathname={location.pathname}
          breadcrumbNameMap={{
            '/product': 'Sản phẩm',
            [`/product/${productReducer.product?.slug}`]:
              productReducer.product?.name,
          }}
        />
      </div>

      <div className={cx(classes.wrapMainInfo, 'd-f')}>
        <div className={cx('d-f', classes.mainInfoContainer)}>
          <div className={cx(classes.wrapImgAndSlide)}>
            <div className={classes.wrapMainImg}>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${infoByColor?.image}`}
                alt={productReducer.product?.name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div
              style={{
                width: productReducer.product?.colors?.length * 100,
                marginTop: '16px',
              }}
            >
              <Slider
                {...settings}
                slidesToShow={
                  productReducer.product?.colors?.length > 4
                    ? 4
                    : productReducer.product?.colors?.length
                }
              >
                {productReducer.product?.colors?.length > 0 &&
                  productReducer.product?.colors?.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        width: '100px',
                        height: '100px',
                      }}
                      onClick={() => handleClickColor(item.value)}
                    >
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}${item?.image}`}
                        alt={productReducer.product?.name}
                        height={100}
                        style={{
                          cursor: 'pointer',
                          border:
                            infoByColor?.value === item.value
                              ? '1px solid #ccc'
                              : '1px solid transparent',
                        }}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 16px' }}>
            <Truncate
              fontWeight="600"
              fontSize={20}
              gutterBottom
              variant="h1"
              component="h1"
              className={cx(classes.prodName)}
              line={2}
            >
              {productReducer.product?.name}
            </Truncate>
            <div className={cx('d-f')} style={{ alignItems: 'center' }}>
              <Rating
                value={rating.toFixed(1)}
                readOnly
                precision={0.1}
                style={{ fontSize: '24px' }}
              />
              <div style={{ marginTop: '2px' }}>
                <span className={cx('ml-8px')}>
                  {isNaN(rating.toFixed(1)) ? 0 : rating.toFixed(1)}
                </span>
                <span className={cx('ml-4px')}>
                  ({productReducer.product?.comments?.length ?? 0})
                </span>
              </div>
            </div>
            <div className={cx('mt-20px')}>
              Giá:{' '}
              <span className={classes.price}>
                {numberWithCommas(productReducer.product?.price)} ₫
              </span>
            </div>
            <ul className={cx('mt-20px', classes.shortDesc)}>
              <li>
                Kích thước driver: 9mm Kích thước driver: 9mm Kích thước driver:
                9mm Kích thước driver: 9mm Kích thước driver: 9mm Kích thước
                driver: 9mm
              </li>
              <li>Kích thước driver: 9mm</li>
              <li>Kích thước driver: 9mm</li>
              <li>Kích thước driver: 9mm</li>
            </ul>
            <div className={cx('d-f', classes.wrapQuantity, 'mt-20px')}>
              <span>Số lượng</span>
              <div className={cx('ml-16px')}>
                <InputQuantity />
              </div>
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="outlined"
                startIcon={<AddShoppingCartIcon />}
                className={classes.mainButton}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button variant="outlined" className={classes.mainButton}>
                Mua ngay
              </Button>
            </Box>
          </div>
        </div>

        <div className={classes.wrapGuarantee}>
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemIcon className={classes.widthIcon}>
                <WorkspacePremiumIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Bảo hành" className={classes.text} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                inset
                className={cx(classes.text, classes.indentListItem)}
                primary="Bảo hành 12 tháng chính hãng (Chi tiết)"
              />
            </ListItem>
          </List>
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemIcon className={classes.widthIcon}>
                <PowerIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Phụ kiện" className={classes.text} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                inset
                className={cx(classes.text, classes.indentListItem)}
                primary="- 3 x Nút tai nghe kích thước S, M, L"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                inset
                className={cx(classes.text, classes.indentListItem)}
                primary="- 3 x Nút tai nghe kích thước S, M, L"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                inset
                className={cx(classes.text, classes.indentListItem)}
                primary="- 3 x Nút tai nghe kích thước S, M, L"
              />
            </ListItem>
          </List>
        </div>
      </div>

      <div className={classes.wrapProdDetail}>
        <Typography
          variant="h2"
          component="h2"
          fontSize={18}
          fontWeight={600}
          padding="16px"
          bgcolor="#f1f1f1"
          gutterBottom
        >
          Chi tiết sản phẩm của {productReducer.product?.name}
        </Typography>
        <div style={{ padding: '0 16px' }}>
          <Collapse in={isShowMore} collapsedSize={40} ref={descRef}>
            {productReducer.product?.description}
          </Collapse>
          {height > 500 && (
            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <Button
                variant="outlined"
                className={cx('fz-16px', classes.showMoreBtn)}
                onClick={handleClickShowMore}
              >
                {isShowMore ? 'Thu gọn' : 'Xem thêm'}
              </Button>
            </div>
          )}
        </div>
      </div>

      <section>
        <Typography
          variant="h2"
          component="h2"
          fontSize={18}
          fontWeight={600}
          padding="10px 16px"
          bgcolor="#f1f1f1"
          gutterBottom
        >
          Đánh giá sản phẩm
          <Tippy content={isOpenFormRating ? 'Thu gọn' : 'Thêm đánh giá'}>
            <IconButton
              aria-label="add-rating"
              style={{ marginLeft: '8px' }}
              onClick={handleClickOpenFormRating}
            >
              {isOpenFormRating ? (
                <RemoveCircleOutlineIcon fontSize="large" />
              ) : (
                <AddCircleOutlineIcon fontSize="large" />
              )}
            </IconButton>
          </Tippy>
        </Typography>

        <Collapse in={isOpenFormRating}>
          <ReviewForm />
        </Collapse>
        <ReviewList reviews={productReducer.product?.comments ?? []} />
      </section>
    </div>
  );
}

export default ProductDetail;
