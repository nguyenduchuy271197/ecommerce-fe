import { z } from "zod";

export const categorySchema = z.object({
  id: z.string(),
  thumbnail: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type Category = z.infer<typeof categorySchema>;
export type CreateCategory = Omit<Category, "id" | "slug">;
export type UpdateCategory = Omit<Category, "id" | "slug">;
export type CategoryId = Category["id"];
