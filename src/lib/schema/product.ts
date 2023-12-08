import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  thumbnail: z.string(),
  price: z.number(),
  categoryId: z.string(),
});

export type Product = z.infer<typeof productSchema>;
export type CreateProduct = Omit<Product, "id" | "slug">;
export type UpdateProduct = Omit<Product, "id" | "slug">;
export type ProductId = Product["id"];
export type ProductCardProps = Product;
