import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        minHeight: '80vh',
        margin: '0 -150px',
    },

    sliderImage: {
        height: '80vh',
        width: '100%',
        objectFit: 'cover',
    },

    sliderButton: {
        position: 'absolute',
        right: '40px',
        top: '75%',
        color: '#fff',
        margin: '20px',
        border: '1px solid #fff',
        fontSize: '1.4rem',
        zIndex: '10',
        backgroundColor: 'transparent',
    },

    sectionBanner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        margin: '28px 0',
    },

    bannerItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.6rem',
        gap: '10px',
        width: '250px',
        lineHeight: '1',
        padding: '0 10px',

        '&.separate': {
            borderRight: '1px solid #7b7b7b',
        },
    },

    bannerIcon: {
        fontSize: '2.8rem',
    },
    sectionTitle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: '32px 0 16px 0',
        padding: '32px 0 0 0',
        fontSize: '2rem',
    },

    sectionBestSeller: {
        padding: '0 0 32px 0',
    },

    sectionNewProducts: {
        padding: '0 0 32px 0',
        margin: '0 -70px',
        backgroundColor: '#f7f7f7',
    },
    sectionProducts: {
        paddingTop: '32px',
        textAlign: 'center',
    },

    sectionDetails: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '32px',
    },

    sectionHomeBoxs: {
        display: 'flex',
        width: 'fit-content',
        justifyContent: 'center',
        height: '450px',
        padding: '32px  0',

        margin: '0 -80px 64px -80px',
    },

    sectionBox: {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        cursor: 'pointer',

        '&:hover sectionBoxImg': {
            filter: 'brightness(100%)',
        },
    },

    sectionBoxImg: {
        height: '100%',
        filter: 'brightness(50%)',
        transition: 'all 2s',
        verticalAlign: 'middle',
        '&:hover': {
            filter: 'brightness(100%)',
            transform: 'scale(1.1)',
            overflow: 'hidden',
        },
    },

    sectionBoxTitle: {
        position: 'absolute',

        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
        textShadow: '0 0 2px #000',
        zIndex: '11',

        '&:hover + .box-transform': {
            filter: 'brightness(100%)',
            transform: 'scale(1.1)',
            overflow: 'hidden',
        },
    },
}));
