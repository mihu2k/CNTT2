import qs from 'qs';
import httpRequest from '~/common/utils/httpRequest';

class CommentService {
  async create(data) {
    const response = await httpRequest.post('/comment', data);
    // console.log(response, 'CREATE COMMENT');
    return response;
  }

  async getByProductId(productId, query) {
    const response = await httpRequest.get(`/comment/productId/${productId}`, {
      params: query,
      paramsSerializer: (params) => qs.stringify(params),
    });
    // console.log(response, 'RESPONSE COMMENT');
    return response;
  }
}

export default new CommentService();
