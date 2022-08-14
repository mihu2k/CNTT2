import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import config from '~/config';
import cx from 'classnames';
import { useStyles } from './categories-box.style';
import image from '~/assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRequest } from '~/redux/actions/category.action';
import { Box } from '@mui/material';

const images = [
  { img: image.homeBox4 },
  { img: image.homeBox3 },
  { img: image.homeBox2 },
  { img: image.homeBox5 },
  { img: image.homeBox1 },
];

const CategoriesBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { category: categorySelector } = useSelector((state) => state);

  const handleClick = (categoryId) => {
    navigate(config.routes.product, { state: { categoryId } });
  };

  React.useEffect(() => {
    dispatch(getCategoriesRequest({}));
  }, []);

  return (
    <div className={cx(classes.sectionHomeBoxes)}>
      {categorySelector.categories?.length > 0
        ? categorySelector.categories.map((category, index) => (
            <Box
              key={category?._id}
              className={classes.sectionBox}
              onClick={() => handleClick(category?._id)}
            >
              <h4 className={classes.sectionBoxTitle}>{category.name}</h4>
              <img
                alt={category.name}
                src={images[index].img}
                className={cx(classes.sectionBoxImg, 'box-transform')}
              />
            </Box>
          ))
        : null}
    </div>
  );
};

export default React.memo(CategoriesBox);
