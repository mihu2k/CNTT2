import { CircularProgress } from '@mui/material';
import { useStyles } from './loading.style';
// import cx from 'classnames';

export default function Loading({ style = {} }) {
  const classes = useStyles();

  return (
    <div className={classes.screenCenter} style={style}>
      <CircularProgress />
    </div>
  );
}
