"use client";

import { getProducts, getProductsByCategory } from "@/lib/api/product/queries";
import { CategoryId } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useProductsByCategoryQuery(id: CategoryId) {
  return useQuery({
    queryKey: ["products", { category: id }],
    queryFn: () => getProductsByCategory(id),
  });
}
