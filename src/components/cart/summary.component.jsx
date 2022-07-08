import cx from 'classnames';
// Components
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
// Icons
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
// Styles
import { numberWithCommas } from '~/common/utils';
import { useStyles } from './summary.style';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

const SUPPORT_PAYMENT = [
  {
    content: 'Thanh toán bằng thẻ quốc tế',
  },
  {
    content: 'Thanh toán tại cửa hàng',
  },
  {
    content: 'Trả góp 0% bằng thẻ tín dụng',
  },
  {
    content: 'Thanh toán bằng ATM/ mã QR/ Ví điện tử',
  },
  {
    content: 'Thanh toán khi nhận hàng/Thanh toán sau',
  },
];

export const Summary = ({ cart }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <LocalShippingIcon
              sx={{
                color: 'var(--primary-color)',
              }}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="p" component="p">
              Miễn phí giao hàng nhanh toàn quốc.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PublishedWithChangesIcon
              sx={{
                color: 'var(--primary-color)',
              }}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="p" component="p">
              Đổi hàng trong 7 ngày nếu phát sinh lỗi của nhà sản xuất.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      <div className={cx('d-f j-c-between', classes.wrapPrice)}>
        <Typography variant="h4" component="span" fontWeight={600}>
          Tổng giá sau thuế:
        </Typography>
        <Typography variant="h4" component="span" fontWeight={600}>
          {numberWithCommas(
            cart.products.reduce(
              (total, product) => total + product.price * product.quantity,
              0,
            ),
          )}
          &nbsp;₫
        </Typography>
      </div>
      <Typography variant="p" component="p" gutterBottom>
        Giá đã bao gồm thuế
      </Typography>
      <div className={classes.nextButtonWrap}>
        <Button
          variant="contained"
          fullWidth
          className={cx(classes.nextButton, 'fz-16px')}
          onClick={() => navigate(config.routes.checkoutShipment)}
        >
          Tiếp tục
        </Button>
      </div>

      <div style={{ margin: '48px 0 24px' }}>
        <Typography variant="p" component="p" fontWeight={600}>
          Hỗ trợ thanh toán:
        </Typography>
        <List>
          {SUPPORT_PAYMENT.map((item, index) => (
            <ListItem disablePadding key={`${item.content}${index}`}>
              <ListItemIcon className="item-payment-icon">
                <CheckRoundedIcon
                  sx={{
                    color: 'var(--primary-color)',
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="p" component="p" fontSize={15}>
                  {item.content}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
