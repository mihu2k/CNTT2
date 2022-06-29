import React from 'react';
import cx from 'classnames';
import { Button, Rating, TextareaAutosize } from '@mui/material';
import { useStyles } from './review-form.style';

export function ReviewForm() {
  const classes = useStyles();
  const [formValue, setFormValue] = React.useState({ rating: 5, content: '' });

  const handleChangeForm = (e, value) => {
    setFormValue({ ...formValue, [e.target.name]: value ?? e.target.value });
  };

  const handleResetForm = () => {
    setFormValue({ rating: 5, content: '' });
  };

  const handleSubmit = () => {
    console.log('SUBMIT');
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
