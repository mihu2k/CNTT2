import { useStyles } from '../login-form-common.style';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
function Header() {
    const classes = useStyles();
    return (
        <header className={classes.headerWrapper}>
            <div className={classes.headerInner}>
                <div className={classes.headerLogo}>
                    <Link
                        to={config.routes.home}
                        className={classes.headerLogoLink}
                    >
                        <img src={images.logo} alt="tiktok-logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
