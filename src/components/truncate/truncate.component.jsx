import { Typography } from '@mui/material';

export const Truncate = ({ children, line = 1, ...props }) => {
  const styles = {
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
  };

  return (
    <Typography {...props} style={styles}>
      {children}
    </Typography>
  );
};
