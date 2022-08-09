import axios from 'axios';
import * as httpRequest from '~/common/utils/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    const response = await axios.get(
      `https://tiktok.fullstack.edu.vn/api/users/search`,
      {
        params: {
          q,
          type,
        },
      },
    );
    return response.data;
  } catch (error) {
    // console.log(error);
  }
};
