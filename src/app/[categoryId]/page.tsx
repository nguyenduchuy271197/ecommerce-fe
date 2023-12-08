"use client";

import { useCategoryQuery } from "@/hooks/category/query";
import Banner from "../_components/banner";
import FilterableProducts from "./_components/filterable-products";

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const categoryId = parseInt(params.categoryId);
  const { data, isLoading } = useCategoryQuery(categoryId);

  if (!data?.category) return null;

  return (
    <main className="space-y-20">
      <Banner heading={data.category.name} src={data.category.image} />
      <FilterableProducts categoryId={categoryId} />
    </main>
  );
}
