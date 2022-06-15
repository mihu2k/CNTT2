import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 24px 48px',
        width: '330px',
        '& .MuiButton-root': {
            fontSize: '1.4rem',
            textTransform: 'initial',
            fontFamily: "'SamsungOne'",
            borderRadius: '999px',
            fontWeight: 600,
        },
        '& .MuiButton-root + .MuiButton-root': {
            margin: '12px 0 0 0',
        },
    },
    imgProd: {
        alignSelf: 'center',
        flexShrink: 0,
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
    },
    prodName: {},
    wrapColor: {
        fontSize: '1.2rem',
        margin: '12px 0',
    },
    wrapChooseColor: {
        display: 'flex',
        marginTop: '8px',
    },
    wrapPrice: {
        margin: '24px 0',
        fontSize: '1.8rem',
        fontWeight: 600,
    },
    circleBox: {
        width: '18px',
        height: '18px',
        borderRadius: 999,
        backgroundColor: '#00ffce',
        border: '1px solid #a1a1a1',
    },
    cardAction: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        padding: '12px 0 0 0',
        borderTop: '1px solid #ccc',
    },
}));
