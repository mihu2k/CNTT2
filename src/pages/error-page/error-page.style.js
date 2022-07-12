import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
    color: '#343434',
    fontFamily: '"montserrat",sans-serif',
    '& h1': {
      fontSize: '220px',
      margin: '0',
      fontWeight: '900',
      letterSpacing: '20px',
      background: `url('https://png.pngtree.com/thumb_back/fw800/background/20190420/pngtree-holographic-iridescent-color-wrinkled-foil-image_107524.jpg') center  no-repeat`,
      '-webkit-text-fill-color': 'transparent',
      '-webkit-background-clip': 'text',
    },
    '& button.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButtonBase-root.css-1071omr-MuiButtonBase-root-MuiButton-root':
      {
        padding: '8px 36px',
        marginTop: '32px',
        color: '#343434',
        backgroundColor: 'transparent',
        borderColor: '#000',
        borderRadius: '24px',

        fontSize: '1.8rem',
        fontWeight: 'bold',
      },
  },
}));
