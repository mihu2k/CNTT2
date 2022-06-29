import { Typography } from '@mui/material';

export const Truncate = ({ children, typographyProps, line = 1 }) => {
  const styles = {
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
  };

  return (
    <Typography {...typographyProps} style={styles}>
      {children}
    </Typography>
  );
};