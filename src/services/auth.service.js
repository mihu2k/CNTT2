import httpRequest from '~/common/utils/httpRequest';

class AuthService {
  async login({ email, password }) {
    const { data } = await httpRequest.post('/auth/login', {
      email,
      password,
    });

    if (data.accessToken) {
      localStorage.setItem('profile', JSON.stringify(data));
    }
    return data;
  }

  async register(data) {
    const response = await httpRequest.post('/auth/register', data);

    if (response.status === 200) {
      localStorage.setItem('profile', JSON.stringify(response.data));
    }
    return response.data;
  }

  async checkToken(token) {
    const response = await httpRequest.get('/auth/checkToken', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}

export default new AuthService();
