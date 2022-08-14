import { Avatar, Rating, Typography } from '@mui/material';
import cx from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateTime } from '~/common/utils';
import { getCommentsByProductIdRequest } from '~/redux/actions/comment.action';
import { useStyles } from './review-list.style';
import * as types from '../../../redux/types';

function ReviewList({ productId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { comment: commentReducer } = useSelector((state) => state);

  const getCommentsByProductId = (id, query = {}) => {
    dispatch(getCommentsByProductIdRequest(id, query));
  };

  React.useEffect(() => {
    if (productId) getCommentsByProductId(productId);
  }, [productId]);

  React.useEffect(() => {
    if (commentReducer.status === types.CREATE_COMMENT_SUCCESS) {
      getCommentsByProductId(productId);
    }
  }, [commentReducer.status]);

  return (
    <ul className={classes.list}>
      {commentReducer.comments?.length > 0 ? (
        commentReducer.comments?.map((comment, index) => (
          <li className={classes.item} key={comment?._id ?? index}>
            <div className={cx('d-f', classes.wrapInfo)}>
              <div className={cx('d-f', classes.wrapInfoLeft)}>
                <Avatar
                  alt={comment?.author?.full_name}
                  src={`${process.env.REACT_APP_API_BASE_URL}${comment?.author?.avatar}`}
                  sx={{ width: 44, height: 44 }}
                />
                <div className="ml-12px">
                  <div style={{ marginBottom: '-4px' }}>
                    <Rating value={comment?.rating?.toFixed(1)} readOnly />
                  </div>
                  <span>{comment?.author?.full_name}</span>
                </div>
              </div>
              <p>{formatDateTime(comment?.updated_at)}</p>
            </div>
            <p className={classes.content}>{comment?.content}</p>
          </li>
        ))
      ) : (
        <Typography variant="p" component="p" paddingBottom={10}>
          Chưa có đánh giá nào.
        </Typography>
      )}
    </ul>
  );
}

export default React.memo(ReviewList);
