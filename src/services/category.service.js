import httpRequest from '~/common/utils/httpRequest';

class CategoryService {
  async getAll(query) {
    const response = await httpRequest.get('/category', { params: query });
    console.log(response, 'RESPONSE CATEGORY');
    return response;
  }
}

export default new CategoryService();
