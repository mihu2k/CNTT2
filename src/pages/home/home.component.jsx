import { Button } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '~/assets/images';
import { useStyles } from './home.style';
import { Link } from 'react-router-dom';

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
                    SHOP NOW
                </Button>
            </Link>
        </div>
    );
}

export default Home;
