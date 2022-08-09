import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cx from 'classnames';
import { IconButton, OutlinedInput } from '@mui/material';
import { useStyles } from './input-quantity.style';
import React from 'react';

export const InputQuantity = ({
  getQuantity = () => {},
  quantityProps = 1,
  onClickChange = () => {},
  onChange = () => {},
}) => {
  const classes = useStyles();

  const [quantity, setQuantity] = React.useState(quantityProps);

  const handleChange = (evt) => {
    if (evt.target.validity.valid) {
      setQuantity(evt.target.value ? evt.target.value : 1);
      onChange(evt.target.value ? evt.target.value : 1);
    }
  };

  const handleClickChange = (type) => {
    if (type === 'increase') {
      setQuantity((prev) => {
        onClickChange(type, Number(prev) + 1);
        return Number(prev) + 1;
      });
      return;
    }
    setQuantity((prev) => {
      onClickChange(type, prev > 1 ? prev - 1 : 1);
      return prev > 1 ? prev - 1 : 1;
    });
  };

  React.useEffect(() => {
    getQuantity(quantity);
  }, [quantity]);

  // // console.log(quantity, 'QUAN');

  return (
    <div className={cx('d-f')}>
      <IconButton
        aria-label="delete"
        style={{
          borderRadius: 0,
          border: '1px solid #ccc',
          fontSize: '1.6rem',
          minWidth: '38px',
        }}
        onClick={() => handleClickChange('decrease')}
        disabled={quantity === 1}
      >
        <RemoveIcon />
      </IconButton>
      <div className={classes.wrapInputQuantity}>
        <OutlinedInput
          value={quantity}
          onChange={handleChange}
          inputProps={{
            pattern: '[0-9]*',
          }}
        />
      </div>
      <IconButton
        aria-label="add"
        style={{
          borderRadius: 0,
          border: '1px solid #ccc',
          fontSize: '1.6rem',
          minWidth: '38px',
        }}
        onClick={() => handleClickChange('increase')}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};
