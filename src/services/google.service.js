import axios from 'axios';
import { GG_API_INFO_URL } from '~/constants';
import AuthService from './auth.service';

class GoogleService {
  async getUserInfo(accessToken) {
    const response = await axios.get(GG_API_INFO_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userData = await AuthService.register({ googleInfo: response.data });

    if (userData.status === 200) {
      localStorage.setItem('profile', JSON.stringify(userData));
    }
    return userData;
  }
}

export default new GoogleService();
