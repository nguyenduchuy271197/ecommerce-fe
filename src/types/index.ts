import { Database } from "./supabase.type";

export type ICategory = Database["public"]["Tables"]["categories"]["Row"];
export type IProduct = Database["public"]["Tables"]["products"]["Row"];
export interface IProductDetail extends IProduct {
  category: ICategory;
  product_images: IProductImage[];
}
export type IProductImage =
  Database["public"]["Tables"]["product_images"]["Row"];

export type CategoryId = ICategory["id"];
