import type { Product } from "../types";
import { storeApi } from "./storeAPI";

export const getProducts = async (): Promise<Product[]> => {
  const response = await storeApi.get("/products");
  return response.data;
};
