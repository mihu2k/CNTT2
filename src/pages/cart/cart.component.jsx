import { Grid } from '@mui/material';
import { CardHorizontal, Summary } from '~/components/cart';
import { useStyles } from './cart.style';

export function Cart() {
  const classes = useStyles();

  return (
    <div className="mt-20px" style={{ marginBottom: '24px' }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <section className={classes.sectionListItem}>
            <CardHorizontal />
            <CardHorizontal />
            <CardHorizontal />
          </section>
        </Grid>
        <Grid item xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </div>
  );
}
