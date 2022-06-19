/* eslint-disable jsx-a11y/img-redundant-alt */
import {
    Button,
    Card,
    CardActions,
    CardContent,
    // CardMedia,
    Typography,
} from '@mui/material';
import { useStyles } from './card.style';
import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import cx from 'classnames';

function ProductCard() {
    const classes = useStyles();

    const renderStars = (star) => {
        const TOTAL_STAR = 5;
        let listStar = [];
        const disableStar = TOTAL_STAR - star;

        for (let i = 0; i < star; i++) {
            if (i === 0) {
                listStar.push(<StarIcon color="warning" fontSize="large" />);
                continue;
            }
            listStar.push(
                <StarIcon
                    color="warning"
                    fontSize="large"
                    className="ml-2px"
                />,
            );
        }
        for (let i = 0; i < disableStar; i++) {
            listStar.push(
                <StarIcon fontSize="large" className="gray ml-2px" />,
            );
        }

        return listStar;
    };

    return (
        <>
            <Card className={classes.wrapper}>
                <img
                    src="https://images.samsung.com/is/image/samsung/p6pim/vn/eo-ia500bbegww/gallery/vn-samsung-35mm-earphones-eo-ia500-eo-ia500bbegww-thumb-530460391?$160_160_PNG$"
                    alt="product image"
                    height="160"
                    width="160"
                    className={classes.imgProd}
                />
                <CardContent className={classes.cardContent}>
                    <Typography
                        fontFamily="SamsungOne"
                        fontWeight="600"
                        fontSize={16}
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={cx('f-grow-1', classes.prodName)}
                    >
                        Galaxy Watch4 Bluetooth (40mm)
                    </Typography>
                    <div className={cx('f-shrink-0', classes.wrapColor)}>
                        <div>
                            <span style={{ fontWeight: 600 }}>Màu sắc:</span>
                            <span className="pl-4px">Vàng Hồng Thanh Lịch</span>
                        </div>
                        <div className={classes.wrapChooseColor}>
                            <div
                                className={cx(classes.circleBox, 'mr-16px')}
                            ></div>
                            <div
                                className={cx(classes.circleBox, 'mr-16px')}
                            ></div>
                            <div className={cx(classes.circleBox)}></div>
                        </div>
                    </div>
                    <div className={cx('f-shrink-0', classes.wrapPrice)}>
                        <div>5.489.891 ₫</div>
                        <div className="mt-20px">{renderStars(4)}</div>
                    </div>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button size="large" variant="contained" fullWidth>
                        Mua ngay
                    </Button>
                    <Button size="large" variant="outlined" fullWidth>
                        Tìm hiểu thêm
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ProductCard;
