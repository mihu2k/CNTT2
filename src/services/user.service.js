import httpRequest from '~/common/utils/httpRequest';

class UserService {
  async create(data, type = 'default') {
    const response = await httpRequest.post('/user', data);

    if (response.status === 200 && type === 'register') {
      localStorage.setItem('profile', JSON.stringify(response.data));
    }
    return response;
  }
}

export default new UserService();
