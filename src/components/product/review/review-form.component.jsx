import React from 'react';
import cx from 'classnames';
import { Button, Rating, TextareaAutosize } from '@mui/material';
import { useStyles } from './review-form.style';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentRequest } from '~/redux/actions/comment.action';
import { showToastMsg } from '~/common/utils';
import * as types from '../../../redux/types';
import { checkTokenRequest } from '~/redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import httpRequest from '~/common/utils/httpRequest';

export function ReviewForm({ productId, productSlug }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (formValue.content && productId) {
      dispatch(createCommentRequest({ ...formValue, productId }));
      handleResetForm();
      return;
    }
    showToastMsg('error', 'Thông tin không để trống.', {
      toastId: 'hung',
    });
  };

  // console.log(formValue);

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
