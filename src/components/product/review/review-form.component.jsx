import { Button, Rating, TextareaAutosize } from '@mui/material';
import cx from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showToastMsg } from '~/common/utils';
import { createCommentRequest } from '~/redux/actions/comment.action';
import { useStyles } from './review-form.style';

export function ReviewForm({ productId, productSlug }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = React.useState({ rating: 5, content: '' });

  // const { auth: authReducer, comment: commentReducer } = useSelector(
  //   (state) => state,
  // );

  const handleChangeForm = (e, value) => {
    setFormValue({ ...formValue, [e.target.name]: value ?? e.target.value });
  };

  const handleResetForm = () => {
    setFormValue({ rating: 5, content: '' });
  };

  const handleSubmit = async () => {
    if (formValue.content.trim() && productId) {
      dispatch(createCommentRequest({ ...formValue, productId }));
      handleResetForm();
      return;
    }
    showToastMsg('error', 'Thông tin không để trống.', {
      toastId: 'hung',
    });
  };

  // // console.log(formValue);

  return (
    <section className={cx('d-f', classes.root)}>
      <Rating
        name="rating"
        style={{ fontSize: '28px' }}
        value={formValue.rating}
        onChange={handleChangeForm}
      />
      <div className={classes.wrapContent}>
        <TextareaAutosize
          aria-label="textarea-rating-content"
          minRows={5}
          name="content"
          value={formValue.content}
          onChange={handleChangeForm}
          className={classes.textarea}
        />
        <div>
          <Button
            variant="outlined"
            className="fz-16px"
            onClick={handleResetForm}
          >
            Làm mới
          </Button>
          <Button
            variant="contained"
            className="fz-16px"
            onClick={handleSubmit}
          >
            Đánh giá
          </Button>
        </div>
      </div>
    </section>
  );
}
