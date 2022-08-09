import qs from 'qs';
import httpRequest from '~/common/utils/httpRequest';

class ProductService {
  async getAll(query) {
    const response = await httpRequest.get('/product', {
      params: query,
      paramsSerializer: (params) => qs.stringify(params),
    });
    // console.log(response, 'RESPONSE');
    return response;
  }

  async getOneBySlug(slug) {
    const response = await httpRequest.get(`/product/${slug}/slug`);
    return response;
  }
}

export default new ProductService();
