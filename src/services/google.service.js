import httpRequest from '~/common/utils/httpRequest';
import { GG_API_INFO_URL } from '~/constants';
import UserService from './user.service';

class GoogleService {
  async getUserInfo(accessToken) {
    const response = await httpRequest.get(GG_API_INFO_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userData = await UserService.create({ googleInfo: response.data });

    if (userData.status === 200) {
      localStorage.setItem('profile', JSON.stringify(userData.data));
    }
    return userData.data;
  }
}

export default new GoogleService();
