/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import cx from 'classnames';
import { IconButton, Typography } from '@mui/material';
import { useStyles } from './card-horizontal.style';
import { InputQuantity } from '../input-quantity';
import Tippy from '@tippyjs/react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Truncate } from '../truncate';

export function CardHorizontal() {
  const classes = useStyles();

  return (
    <div className={cx('d-f', classes.box)}>
      <img
        src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
        alt="Product Image"
        className={classes.imgProd}
      />
      <div className={classes.wrapInfo}>
        <div className={cx('d-f', classes.info)}>
          <div style={{ maxWidth: '60%' }}>
            <Truncate
              typographyProps={{ variant: 'h4', component: 'h4' }}
              line={2}
            >
              Galaxy Tab S7 FE Galaxy Tab S7 FE LTE Galaxy Tab S7 FE LTE Galaxy
              Tab S7 FE LTE Galaxy Tab S7 FE LTE
            </Truncate>
          </div>
          <Typography
            variant="p"
            component="p"
            style={{ fontWeight: 'bold', fontSize: '1.8rem' }}
          >
            9.595.932 ₫
          </Typography>
        </div>
        <div className={cx('d-f', classes.action)}>
          <div>
            <InputQuantity />
          </div>
          <Tippy content={`Xóa {SP1} khỏi giỏ hàng`}>
            <IconButton
              aria-label="delete product"
              style={{ marginLeft: '8px' }}
            >
              <DeleteIcon style={{ fontSize: '22px', color: '#000' }} />
            </IconButton>
          </Tippy>
        </div>
      </div>
    </div>
  );
}
