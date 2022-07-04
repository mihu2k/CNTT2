import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Link as LinkUI, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import config from '~/config';

export const Breadcrumb = ({ pathname, breadcrumbNameMap = {} }) => {
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="large" />}
      aria-label="breadcrumb"
    >
      <LinkUI
        underline="hover"
        key="1"
        color="inherit"
        component={Link}
        to={config.routes.home}
      >
        Trang chủ
      </LinkUI>
      {pathnames.map((_item, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} color="text.primary" fontFamily="SamsungOne">
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkUI
            underline="hover"
            key={to}
            color="inherit"
            component={Link}
            to={to}
          >
            {breadcrumbNameMap[to]}
          </LinkUI>
        );
      })}
    </Breadcrumbs>
  );
};
