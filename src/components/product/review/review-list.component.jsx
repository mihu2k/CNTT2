import { Avatar, Rating, Typography } from '@mui/material';
import cx from 'classnames';
import { formatDateTime } from '~/common/utils';
import { useStyles } from './review-list.style';

function ReviewList({ reviews }) {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {reviews.length > 0 ? (
        reviews?.map((review, index) => (
          <li className={classes.item} key={review?._id ?? index}>
            <div className={cx('d-f', classes.wrapInfo)}>
              <div className={cx('d-f', classes.wrapInfoLeft)}>
                <Avatar
                  alt={review?.author?.full_name}
                  src={`${process.env.REACT_APP_API_BASE_URL}${review?.author?.avatar}`}
                  sx={{ width: 44, height: 44 }}
                />
                <div className="ml-12px">
                  <div style={{ marginBottom: '-4px' }}>
                    <Rating value={review?.rating?.toFixed(1)} readOnly />
                  </div>
                  <span>{review?.author?.full_name}</span>
                </div>
              </div>
              <p>{formatDateTime(review?.updated_at)}</p>
            </div>
            <p className={classes.content}>{review?.content}</p>
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

export default ReviewList;
