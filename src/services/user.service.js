import httpRequest from '~/common/utils/httpRequest';

class UserService {
  async create(data) {
    const response = await httpRequest.post('/user', data);
    return response;
  }

  async resetPassConfirm(data) {
    const response = await httpRequest.post('/user/resetPassword', data);
    console.log(response);
    return response;
  }

  async resetPassword(data) {
    const response = await httpRequest.patch('/user/resetPassword', data);
    console.log(response);
    return response;
  }
}

export default new UserService();
