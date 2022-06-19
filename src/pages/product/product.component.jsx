/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// Styles
import { useStyles } from './product.style';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Checkbox,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import ProductCard from '~/components/product-card/card.component';

function Product() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState([0]);

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

  return (
    <div className={classes.root}>
      <div className={classes.wrapHeaderFilter}>
        <div>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="medium" />}
            aria-label="breadcrumb"
          >
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              // onClick={handleClick}
            >
              Trang chủ
            </Link>
            <Link
              underline="hover"
              key="2"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              // onClick={handleClick}
            >
              Sản phẩm
            </Link>
            <Typography
              key="3"
              color="text.primary"
              fontSize={14}
              fontFamily="SamsungOne"
            >
              Tai nghe không dây
            </Typography>
          </Breadcrumbs>
        </div>
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
        {/* <Grid item xs={12}>
        </Grid> */}
        <Grid item xs={3}>
          <div className={classes.wrapAccordion}>
            <Accordion expanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography fontSize={14}>Nhãn hiệu</Typography>
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
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
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
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={4} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }}>
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
