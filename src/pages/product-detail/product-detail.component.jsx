/* eslint-disable jsx-a11y/img-redundant-alt */
// Styles
import { useStyles } from './product-detail.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Components
import {
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import Slider from 'react-slick';
import { renderStars } from '~/common/utils';
import cx from 'classnames';

function ProductDetail() {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowBackIosNewIcon />,
    nextArrow: <ArrowForwardIosIcon />,
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapBreadcrumb}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="medium" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            // onClick={handleClick}
          >
            Trang chủ
          </Link>
          <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            // onClick={handleClick}
          >
            Sản phẩm
          </Link>
          <Typography
            key="3"
            color="text.primary"
            fontSize={14}
            fontFamily="SamsungOne"
          >
            Tai nghe không dây
          </Typography>
        </Breadcrumbs>
      </div>

      <div className={cx(classes.wrapMainInfo, 'd-f')}>
        <div className={cx('d-f')}>
          <div className={cx(classes.wrapImgAndSlide, 'mr-16px')}>
            <div className={classes.wrapMainImg}>
              <img
                src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                alt="Product Image"
              />
            </div>
            <Slider {...settings}>
              <div>
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                  alt="Product Image"
                  height={100}
                />
              </div>
              <div>
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                  alt="Product Image"
                  height={100}
                />
              </div>
              <div>
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                  alt="Product Image"
                  height={100}
                />
              </div>
              <div>
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                  alt="Product Image"
                  height={100}
                />
              </div>
              <div>
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                  alt="Product Image"
                  height={100}
                />
              </div>
            </Slider>
          </div>
          <div style={{ maxWidth: '500px' }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              fontSize={20}
              fontWeight={600}
            >
              TAI NGHE NHÉT TAI JBL TUNE 110 CHÍNH HÃNG
            </Typography>
            <div className={cx('d-f')}>
              {renderStars(3)}
              <span className={cx('ml-8px')}>2.5</span>
              <span className={cx('ml-4px')}>(25)</span>
            </div>
            <div className={cx('mt-20px')}>
              Giá: <span className={classes.price}>5.489.891 ₫</span>
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
              <div className={cx('d-f', 'ml-16px')}>
                <IconButton
                  aria-label="delete"
                  style={{ borderRadius: 0, border: '1px solid #ccc' }}
                >
                  <RemoveIcon />
                </IconButton>
                <div className={classes.wrapInputQuantity}>
                  <OutlinedInput value={1} defaultValue={1} />
                </div>
                <IconButton
                  aria-label="add"
                  style={{ borderRadius: 0, border: '1px solid #ccc' }}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
              className={cx('mt-20px')}
            >
              <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                Thêm vào giỏ hàng
              </Button>
              <Button variant="contained">Mua ngay</Button>
            </Box>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ProductDetail;
