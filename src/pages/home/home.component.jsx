import { Button, Grid } from '@mui/material';
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
import { Link } from 'react-router-dom';
import ProductCard from '~/components/product-card';

import cx from 'classnames';

function Home() {
  const classes = useStyles();

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

        <Link to="./">
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
          <p>Thanh toán dễ dàng và bảo mật</p>
        </span>
        <span className={cx('separate', classes.bannerItem)}>
          <LocalShippingIcon className={classes.bannerIcon} />
          <p>Giao hàng toàn quốc nhanh chóng</p>
        </span>
        <span className={cx('separate', classes.bannerItem)}>
          <PublishedWithChangesIcon className={classes.bannerIcon} />
          <p>Đổi sản phẩm trong vòng 7 ngày</p>
        </span>
        <span className={classes.bannerItem}>
          <TaskAltIcon className={classes.bannerIcon} />
          <p>Cam kết sản phẩm chính hãng</p>
        </span>
      </div>

      <div className={classes.sectionBestSeller}>
        <div className={classes.sectionTitle}>
          <h2>Bán chạy nhất</h2>
        </div>

        <Grid item className={cx(classes.sectionProducts, 'grid wide')}>
          <Grid container spacing={4}>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={3} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
        <Link to={'./'} className={classes.sectionDetails}>
          <Button
            variant="text"
            sx={{
              display: 'block',
              minWidth: '113px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: 'transparent!important',
              color: '#000',
              fontSize: '16px',
              border: '1px solid #000',
              textTransform: 'inherit',
              fontWeight: '500',
            }}
          >
            Xem tất cả
          </Button>
        </Link>
      </div>

      <div className={classes.sectionNewProducts}>
        <div className={classes.sectionTitle}>
          <h2>Sản phẩm mới</h2>
        </div>
        <Slider
          className={cx(classes.sectionProducts, 'grid wide')}
          dots={false}
          slidesToShow={3}
          slidesToScroll={2}
          lazyLoad={true}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
      <div className={classes.sectionTitle}>
        <h2>Bạn có thể xem thêm</h2>
      </div>
      <div className={cx(classes.sectionHomeBoxs)}>
        <Link to={'./'} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Loa không dây </h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox1}
            alt="homeBox1"
          />
        </Link>
        <Link to={'./'} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Tai nghe</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox2}
            alt="homeBox2"
          />
        </Link>
        <Link to={'./'} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Âm thanh gia đình</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox5}
            alt="homeBox5"
          />
        </Link>
        <Link to={'./'} className={classes.sectionBox}>
          <h4 className={classes.sectionBoxTitle}>Dòng sản phẩm gaming</h4>
          <img
            className={cx(classes.sectionBoxImg, 'box-transform')}
            src={image.homeBox3}
            alt="homeBox3"
          />
        </Link>
        <Link to={'./'} className={classes.sectionBox}>
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
