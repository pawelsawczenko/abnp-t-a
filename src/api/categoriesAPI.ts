import { storeApi } from './storeAPI';

export const getCategories = async (): Promise<string[]> => {
  const response = await storeApi.get('/products/categories');
  return response.data;
};
