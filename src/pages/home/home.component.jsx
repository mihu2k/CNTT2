import { Button, Grid, Typography } from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from '~/assets/images';
import { useStyles } from './home.style';
import { Link, useLocation } from 'react-router-dom';
import config from '~/config';
import ProductCard from '~/components/product/card';

import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '~/redux/actions/product.action';
import React from 'react';

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const productReducer = useSelector((state) => state.product);
  // const authReducer = useSelector((state) => state.auth);
  const [query, setQuery] = React.useState({
    per_page: 8,
  });

  const LIST_SLIDER = [
    {
      name: 'slider1',
      url_image: image.slider1,
    },
    {
      name: 'slider2',
      url_image: image.slider2,
    },
    {
      name: 'slider3',
      url_image: image.slider3,
    },
    {
      name: 'slider4',
      url_image: image.slider4,
    },
  ];

  const fetchProducts = (query = {}) => {
    dispatch(getProductsRequest(query));
  };

  const handleClickShowAll = () => {
    setQuery((prev) => ({ ...prev, per_page: 'all' }));
  };

  React.useEffect(() => {
    fetchProducts(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, query]);

  // console.log(authReducer, 'authReducer');

  const settings_new_products = {
    dots: false,
    slidesToScroll: 2,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cx(classes.container)}>
      <div className={classes.wrapper}>
        <Slider
          adaptiveHeight
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          lazyLoad={true}
          infiniteScroll={true}
          pauseOnHover={false}
          easing={'linear'}
        >
          {LIST_SLIDER.map((slider, index) => (
            <img
              key={index}
              className={classes.sliderImage}
              src={slider.url_image}
              alt={slider.name}
            />
          ))}
        </Slider>

        <Link to={config.routes.product}>
          <Button
            className={classes.sliderButton}
            variant="contained"
            startIcon={<LocalGroceryStoreIcon />}
          >
            KHÁM PHÁ NGAY
          </Button>
        </Link>
      </div>

      <div className={classes.sectionBanner}>
        <span className={cx('separate', classes.bannerItem)}>
          <PaymentIcon className={classes.bannerIcon} />
          <p className={classes.bannerText}>Thanh toán dễ dàng và bảo mật</p>
        </span>
        <span className={cx('separate', classes.bannerItem)}>
          <LocalShippingIcon className={classes.bannerIcon} />
          <p className={classes.bannerText}>Giao hàng toàn quốc nhanh chóng</p>
        </span>
        <span className={cx('separate', classes.bannerItem)}>
          <PublishedWithChangesIcon className={classes.bannerIcon} />
          <p className={classes.bannerText}>Đổi sản phẩm trong vòng 7 ngày</p>
        </span>
        <span className={classes.bannerItem}>
          <TaskAltIcon className={classes.bannerIcon} />
          <p className={classes.bannerText}>Cam kết sản phẩm chính hãng</p>
        </span>
      </div>

      <div className={classes.sectionBestSeller}>
        <div className={classes.sectionTitle}>
          <h2>Bán chạy nhất</h2>
        </div>

        <Grid item className={cx(classes.sectionProducts, 'grid wide')}>
          <Grid container spacing={4}>
            {productReducer.products.length > 0 ? (
              productReducer.products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: 'flex' }}
                  key={product._id}
                >
                  <ProductCard product={product} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="p" component="p" align="center" margin={4}>
                  Chưa có sản phẩm nào. Vui lòng quay lại sau. Xin cảm ơn.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <div className={classes.sectionDetails}>
          <Button variant="text" onClick={handleClickShowAll}>
            Xem tất cả
          </Button>
        </div>
      </div>

      <div className={classes.sectionNewProducts}>
        <div className={classes.sectionTitle}>
          <h2>Sản phẩm mới</h2>
        </div>

        {productReducer.products.length > 0 ? (
          <Slider
            className={cx(classes.sectionProducts)}
            {...settings_new_products}
            slidesToShow={
              productReducer.products.length > 3
                ? 3
                : productReducer.products.length
            }
          >
            {productReducer.products
              .filter((_product, index) => index < 10)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </Slider>
        ) : (
          <Typography variant="p" component="p" align="center" margin={4}>
            Chưa có sản phẩm nào. Vui lòng quay lại sau. Xin cảm ơn.
          </Typography>
        )}
      </div>

      <div className={classes.sectionTitle}>
        <h2>Bạn có thể xem thêm</h2>
      </div>
      <div className={cx(classes.sectionHomeBoxs)}>
        <Link to={config.routes.product} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Loa không dây </h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox1}
            alt="homeBox1"
          />
        </Link>
        <Link to={config.routes.product} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Tai nghe</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox2}
            alt="homeBox2"
          />
        </Link>
        <Link to={config.routes.product} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Âm thanh gia đình</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox5}
            alt="homeBox5"
          />
        </Link>
        <Link to={config.routes.product} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Dòng sản phẩm gaming</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox3}
            alt="homeBox3"
          />
        </Link>
        <Link to={config.routes.product} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Âm thanh chuyên nghiệp</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox4}
            alt="homeBox4"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
