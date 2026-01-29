import type { Product } from "../../types";

export type ProductCardProps = Omit<Product, "category" | "rating">;
