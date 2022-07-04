/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// Styles
import { useStyles } from './product.style';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '~/components/breadcrumb';
import Loading from '~/components/loading/loading.component';
import ProductCard from '~/components/product/card';
import { getProductsRequest } from '~/redux/actions/product.action';

function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const productReducer = useSelector((state) => state.product);

  const [checked, setChecked] = React.useState([0]);
  const [expanded, setExpanded] = React.useState(true);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const fetchProducts = (query = {}) => {
    dispatch(getProductsRequest(query));
  };

  React.useEffect(() => {
    fetchProducts();
  }, [location]);

  console.log(location, 'LOCATION');

  return (
    <div className={classes.root}>
      <div className={classes.wrapHeaderFilter}>
        <Breadcrumb
          pathname={location.pathname}
          breadcrumbNameMap={{ '/product': 'Sản phẩm' }}
        />

        <div>
          <Select
            id="filter-select"
            value={10}
            className={classes.select}
            // onChange={handleChange}
            // variant="standard"
          >
            <MenuItem value={10} className={classes.selectItem}>
              Mới nhất
            </MenuItem>
            <MenuItem value={11} className={classes.selectItem}>
              Đánh giá cao nhất
            </MenuItem>
            <MenuItem value={20} className={classes.selectItem}>
              Giá thấp đến cao
            </MenuItem>
            <MenuItem value={30} className={classes.selectItem}>
              Giá cao đến thấp
            </MenuItem>
          </Select>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={3} md={3}>
          <div className={classes.wrapAccordion}>
            <Accordion expanded={expanded}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpanded(!expanded)}
              >
                <Typography fontSize={16}>Thể loại</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}
                >
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} disablePadding>
                        <ListItemButton
                          key={value}
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              key={value}
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            key={value}
                            id={labelId}
                            primaryTypographyProps={{
                              fontSize: '1.4rem',
                            }}
                            primary={`Line item ${value + 1}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          // style={{ backgroundColor: '#f7f7f7', padding: '20px' }}
        >
          {productReducer.status === 'pending' ? (
            <Loading
              style={{
                position: 'unset',
                width: '100%',
                height: '100%',
                background: 'none',
              }}
            />
          ) : (
            <Grid container spacing={{ sm: 0, md: 8, lg: 2 }}>
              {productReducer.products.length > 0 ? (
                productReducer.products.map((product) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    style={{ display: 'flex' }}
                    key={product._id}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography
                    variant="p"
                    component="p"
                    align="center"
                    marginTop={4}
                  >
                    Chưa có sản phẩm nào. Vui lòng quay lại sau. Xin cảm ơn.
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
