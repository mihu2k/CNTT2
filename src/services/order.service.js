import httpRequest from '~/common/utils/httpRequest';

class OrderService {
  async getOneById(id) {
    const response = await httpRequest.get(`/order/${id}`);
    console.log(response, 'RESPONSE ORDER');
    return response;
  }

  async create(data) {
    const response = await httpRequest.post('/order', data);
    console.log(response, 'CREATE ORDER');
    return response;
  }
}

export default new OrderService();
