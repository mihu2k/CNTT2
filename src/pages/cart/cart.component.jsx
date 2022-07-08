import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardHorizontal, Summary } from '~/components/cart';
import config from '~/config';
import { useStyles } from './cart.style';

export function Cart() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { cart: cartReducer } = useSelector((state) => state);

  return (
    <div className="mt-20px" style={{ marginBottom: '24px' }}>
      {cartReducer.products?.length > 0 ? (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={8}>
            <section className={classes.sectionListItem}>
              {cartReducer.products?.map((product) => (
                <CardHorizontal
                  key={`${product?._id}${product?.colorValue}`}
                  product={product}
                />
              ))}
            </section>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Summary cart={cartReducer} />
          </Grid>
        </Grid>
      ) : (
        <Box
          minHeight="50vh"
          sx={{
            textAlign: 'center',
            paddingTop: '42px',
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            fontSize={24}
            fontWeight={600}
          >
            Giỏ hàng của bạn trống.
          </Typography>
          <Button
            variant="outlined"
            style={{
              fontSize: '1.5rem',
              marginTop: '16px',
              padding: '5px 24px',
              borderRadius: '24px',
            }}
            onClick={() => navigate(config.routes.product)}
          >
            Bắt đầu mua hàng
          </Button>
        </Box>
      )}
    </div>
  );
}
