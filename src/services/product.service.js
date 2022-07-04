import httpRequest from '~/common/utils/httpRequest';

class ProductService {
  async getAll(query) {
    const response = await httpRequest.get('/product', { params: query });
    console.log(response, 'RESPONSE');
    return response;
  }
}

export default new ProductService();
