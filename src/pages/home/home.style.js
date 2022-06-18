import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        minHeight: '90vh',
        width: '100%',
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
        zIndex: '100',
        backgroundColor: 'transparent',
    },
}));
