import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cx from 'classnames';
import { IconButton, OutlinedInput } from '@mui/material';
import { useStyles } from './input-quantity.style';

export const InputQuantity = () => {
  const classes = useStyles();

  return (
    <div className={cx('d-f')}>
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
  );
};
