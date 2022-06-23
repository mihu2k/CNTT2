import { Avatar } from '@mui/material';
import { renderStars } from '~/common/utils';
import cx from 'classnames';
import { useStyles } from './review-list.style';

function ReviewList() {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <div className={cx('d-f', classes.wrapInfo)}>
          <div className={cx('d-f', classes.wrapInfoLeft)}>
            <Avatar
              alt="Avatar"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 44, height: 44 }}
            />
            <div className="ml-12px">
              <div style={{ marginBottom: '-4px' }}>{renderStars(4)}</div>
              <span>Minh Hung</span>
            </div>
          </div>
          <p>23/06/2022 12:10</p>
        </div>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laborum provident esse cumque soluta commodi sapiente autem inventore
          reiciendis earum veniam similique doloremque recusandae officia culpa,
          corrupti excepturi maiores ex.
        </p>
      </li>
      <li className={classes.item}>
        <div className={cx('d-f', classes.wrapInfo)}>
          <div className={cx('d-f', classes.wrapInfoLeft)}>
            <Avatar
              alt="Avatar"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 44, height: 44 }}
            />
            <div className="ml-12px">
              <div style={{ marginBottom: '-4px' }}>{renderStars(4)}</div>
              <span>Minh Hung</span>
            </div>
          </div>
          <p>23/06/2022 12:10</p>
        </div>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laborum provident esse cumque soluta commodi sapiente autem inventore
          reiciendis earum veniam similique doloremque recusandae officia culpa,
          corrupti excepturi maiores ex.
        </p>
      </li>
      <li className={classes.item}>
        <div className={cx('d-f', classes.wrapInfo)}>
          <div className={cx('d-f', classes.wrapInfoLeft)}>
            <Avatar
              alt="Avatar"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 44, height: 44 }}
            />
            <div className="ml-12px">
              <div style={{ marginBottom: '-4px' }}>{renderStars(4)}</div>
              <span>Minh Hung</span>
            </div>
          </div>
          <p>23/06/2022 12:10</p>
        </div>
        <p className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laborum provident esse cumque soluta commodi sapiente autem inventore
          reiciendis earum veniam similique doloremque recusandae officia culpa,
          corrupti excepturi maiores ex.
        </p>
      </li>
    </ul>
  );
}

export default ReviewList;
