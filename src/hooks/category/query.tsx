import { getCategories, getCategory } from "@/lib/api/category/queries";
import { useQuery } from "@tanstack/react-query";

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}

export function useCategoryQuery(id: number) {
  return useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategory(id),
  });
}
