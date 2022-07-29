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
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
// Components
import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { numberWithCommas } from '~/common/utils';
import { Breadcrumb } from '~/components/breadcrumb';
import { InputQuantity } from '~/components/input-quantity';
import ReviewList, { ReviewForm } from '~/components/product/review';
import { Truncate } from '~/components/truncate';
import { addToCartRequest } from '~/redux/actions/cart.action';
import { getProductBySlugRequest } from '~/redux/actions/product.action';
import * as types from '../../redux/types';

function ProductDetail() {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const descRef = React.useRef();

  const [isShowMore, setIsShowMore] = React.useState(false);
  const [isOpenFormRating, setIsOpenFormRating] = React.useState(false);
  const [infoByColor, setInfoByColor] = React.useState({});
  const [rating, setRating] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const { product: productReducer, comment: commentReducer } = useSelector(
    (state) => state,
  );
  const [openModal, setOpenModal] = React.useState(false);

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

  const handleAddToCart = (navigate) => {
    dispatch(
      addToCartRequest(
        {
          ...productReducer.product,
          quantity,
          colorValue: infoByColor?.value,
          colorName: infoByColor?.name,
          colorImage: infoByColor?.image,
        },
        navigate,
      ),
    );
    setOpenModal(true);
  };

  const getQuantity = (quantity) => {
    setQuantity(quantity);
  };

  React.useEffect(() => {
    getProductBySlug(slug);
    setHeight(descRef.current.clientHeight);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, descRef.current?.clientHeight]);

  // Update rating when user reviews
  React.useEffect(() => {
    if (commentReducer.status === types.CREATE_COMMENT_SUCCESS) {
      getProductBySlug(slug);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentReducer.status]);

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

  // console.log(location, 'LOCATION');
  // console.log(productReducer, 'productReducer.product?._id');
  console.log(height, 'HEIGHT');

  return (
    <div className={classes.root}>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ textAlign: 'center', paddingBottom: '8px' }}
        >
          <CheckCircleRoundedIcon
            color="success"
            style={{ fontSize: '48px' }}
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" fontSize={16}>
            Sản phẩm đã được thêm vào giỏ hàng.
          </DialogContentText>
        </DialogContent>
      </Dialog>

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
                width: isNaN(productReducer.product?.colors?.length * 100)
                  ? '100%'
                  : productReducer.product?.colors?.length * 100,
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
                              ? '1px solid rgb(0 0 0 / 12%)'
                              : '1px solid transparent',
                        }}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 16px', flex: 1 }}>
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
              <span className={classes.price}>
                {numberWithCommas(productReducer.product?.price)} &#8363;
              </span>
            </div>
            <ul
              className={cx('mt-20px', classes.shortDesc)}
              dangerouslySetInnerHTML={{
                __html:
                  productReducer.product?.specifications ||
                  'Chưa có thông tin.',
              }}
            />
            <div className={cx('d-f', classes.wrapQuantity, 'mt-20px')}>
              <span style={{ fontWeight: 'bold' }}>Số lượng</span>
              <div className={cx('ml-16px')}>
                <InputQuantity getQuantity={getQuantity} />
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
                onClick={() => handleAddToCart(null)}
              >
                Thêm vào giỏ hàng
              </Button>
              <Button
                variant="outlined"
                className={classes.mainButton}
                onClick={() => handleAddToCart(navigate)}
              >
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
            {/* <ul
              dangerouslySetInnerHTML={{
                __html: productReducer.product?.accessories,
              }}
            /> */}
            <ListItem disablePadding>
              <ListItemText
                inset
                className={cx(classes.text, classes.indentListItem)}
                primary={
                  productReducer.product?.accessories || 'Chưa có thông tin.'
                }
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
          <Collapse in={isShowMore} collapsedSize={height > 500 ? 500 : height}>
            <div ref={descRef}>{productReducer.product?.description}</div>
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
          <ReviewForm
            productId={productReducer?.product?._id}
            productSlug={productReducer?.product?.slug}
          />
        </Collapse>
        <ReviewList productId={productReducer?.product?._id} />
      </section>
    </div>
  );
}

export default ProductDetail;
