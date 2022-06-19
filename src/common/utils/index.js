import StarIcon from '@mui/icons-material/Star';

/**
 * @author MH
 * @param {number} star
 * @returns arr
 */
export const renderStars = (star) => {
  const TOTAL_STAR = 5;
  let listStar = [];
  const disableStar = TOTAL_STAR - star;

  for (let i = 0; i < star; i++) {
    if (i === 0) {
      listStar.push(<StarIcon color="warning" fontSize="large" />);
      continue;
    }
    listStar.push(
      <StarIcon color="warning" fontSize="large" className="ml-2px" />,
    );
  }
  for (let i = 0; i < disableStar; i++) {
    listStar.push(<StarIcon fontSize="large" className="gray ml-2px" />);
  }
  return listStar;
};
