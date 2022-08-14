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
  Box,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '~/components/breadcrumb';
import ProductCard from '~/components/product/card';
import { getCategoriesRequest } from '~/redux/actions/category.action';
import { getProductsRequest } from '~/redux/actions/product.action';

const FILTERS = [
  {
    text: 'Mới nhất',
    name: 'updated_at',
    value: 'desc',
  },
  {
    text: 'Đánh giá cao nhất',
    name: 'rating',
    value: 'desc',
  },
  {
    text: 'Giá thấp đến cao',
    name: 'price',
    value: 'asc',
  },
  {
    text: 'Giá cao đến thấp',
    name: 'price',
    value: 'desc',
  },
];

function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { product: productReducer, category: categoryReducer } = useSelector(
    (state) => state,
  );

  const [expanded, setExpanded] = React.useState(true);
  const [query, setQuery] = React.useState({
    categoryIds: [],
    sort_by: 'updated_at',
    sort_type: 'desc',
    per_page: 9,
    page: 1,
  });
  const [valueSelect, setValueSelect] = React.useState(0);

  const handleToggle = (value) => () => {
    const currentIndex = query.categoryIds.indexOf(value);
    const newCategoryIds = [...query.categoryIds];

    currentIndex === -1
      ? newCategoryIds.push(value)
      : newCategoryIds.splice(currentIndex, 1);
    setQuery((prev) => ({ ...prev, categoryIds: newCategoryIds, page: 1 }));
  };

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    const filter = FILTERS[value];
    setQuery((prev) => ({
      ...prev,
      sort_by: filter.name,
      sort_type: filter.value,
    }));
    setValueSelect(value);
  };

  const fetchProducts = (query = {}) => {
    dispatch(getProductsRequest(query));
  };

  const fetchCategories = (query = {}) => {
    dispatch(getCategoriesRequest(query));
  };

  React.useEffect(() => {
    fetchProducts(query);
    fetchCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, query]);

  // console.log(query, 'CHECKED');

  return (
    <div className={classes.root}>
      <div className={classes.wrapHeaderFilter}>
        <Breadcrumb
          pathname={location.pathname}
          breadcrumbNameMap={{ '/product': 'Sản phẩm' }}
        />

        <div>
          <Select
            value={valueSelect}
            className={classes.select}
            onChange={handleChangeFilter}
          >
            {FILTERS.map((filter, index) => (
              <MenuItem
                key={filter.text}
                value={index}
                className={classes.selectItem}
              >
                {filter.text}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <Grid container spacing={2}>
        {/* category */}
        <Grid 
          item 
          xs={0} 
          sm={3} 
          md={3}
        >
          <div className={classes.wrapAccordion}>
            <Accordion expanded={expanded}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setExpanded(!expanded)}
              >
                <Typography fontSize={16} fontWeight={600}>
                  Thể loại
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}
                >
                  {categoryReducer.categories.length > 0
                    ? categoryReducer.categories.map((category) => (
                        <ListItem key={category.name} disablePadding>
                          <ListItemButton
                            key={category.name}
                            role={undefined}
                            onClick={handleToggle(category._id)}
                            dense
                          >
                            <ListItemIcon>
                              <Checkbox
                                key={category.name}
                                edge="start"
                                checked={
                                  query.categoryIds.indexOf(category._id) !== -1
                                }
                                tabIndex={-1}
                                disableRipple
                              />
                            </ListItemIcon>
                            <ListItemText
                              key={category.name}
                              id={category.slug}
                              primaryTypographyProps={{
                                fontSize: '1.5rem',
                              }}
                              primary={category.name}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))
                    : null}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        {/* products block */}
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
        >
          <Grid container spacing={{ sm: 0, md: 0, lg: 2 }}>
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
          {/* pagination */}
          <Box my={2}>
            <Pagination
              count={productReducer?.totalPage ?? 1}
              shape="rounded"
              size="large"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                '& .MuiPagination-ul .MuiPaginationItem-root': {
                  fontSize: '16px',
                },
              }}
              page={query.page ?? 1}
              onChange={(_, value) =>
                setQuery((prev) => ({ ...prev, page: value }))
              }
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
