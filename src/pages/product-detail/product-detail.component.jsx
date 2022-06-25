/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// Styles
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useStyles } from './product-detail.style';
// Icons
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PowerIcon from '@mui/icons-material/Power';
import RemoveIcon from '@mui/icons-material/Remove';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// Components
import {
  Box,
  Breadcrumbs,
  Button,
  Collapse,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Typography,
} from '@mui/material';
import cx from 'classnames';
import Slider from 'react-slick';
import { renderStars } from '~/common/utils';
import ReviewList, { ReviewForm } from '~/components/product/review';
import Tippy from '@tippyjs/react';

function ProductDetail() {
  const classes = useStyles();

  const [isShowMore, setIsShowMore] = React.useState(false);
  const [isOpenFormRating, setIsOpenFormRating] = React.useState(false);

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
          <div className={cx(classes.wrapImgAndSlide)}>
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
          <div style={{ maxWidth: '500px', margin: '0 16px' }}>
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
          Chi tiết sản phẩm của TAI NGHE NHÉT TAI JBL TUNE 110 CHÍNH HÃNG
        </Typography>
        <div style={{ padding: '0 16px' }}>
          <Collapse in={isShowMore} collapsedSize={40}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            laudantium possimus reiciendis eligendi quasi, veniam quidem quos
            ipsum vel explicabo fuga dicta sed cum harum, dolorum voluptatum
            blanditiis, doloremque animi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis a numquam consectetur provident ut.
            Assumenda quidem aut accusantium voluptatibus, commodi maxime,
            reprehenderit labore unde suscipit ducimus laudantium excepturi eos
            sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Odio sint, incidunt officia, sit cumque earum beatae qui eos dolorem
            inventore non vitae reiciendis magnam obcaecati a! Veritatis
            quibusdam impedit assumenda?
          </Collapse>
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <Button
              variant="outlined"
              className="fz-16px"
              onClick={handleClickShowMore}
            >
              {isShowMore ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>
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
        <ReviewList />
      </section>
    </div>
  );
}

export default ProductDetail;
