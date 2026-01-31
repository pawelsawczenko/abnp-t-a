import type { IProduct } from '../../../types';
import { storeApi } from '../../../api/storeAPI';

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await storeApi.get('/products');
  return response.data;
};
