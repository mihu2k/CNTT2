import httpRequest from '~/common/utils/httpRequest';

class AuthService {
  async login({ email, password }) {
    const { data } = await httpRequest.post('/auth/login', {
      email,
      password,
    });

    if (data.access_token) {
      localStorage.setItem('profile', JSON.stringify(data));
    }
    return data;
  }
}

export default new AuthService();
