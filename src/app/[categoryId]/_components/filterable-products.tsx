import SectionHeading from "@/components/section-heading";
import Product from "@/components/cards/product";
import { CategoryId } from "@/types";
import { useProductsByCategoryQuery } from "@/hooks/product/query";

export default function FilterableProducts({
  categoryId,
}: {
  categoryId: CategoryId;
}) {
  const { data, isLoading } = useProductsByCategoryQuery(categoryId);

  if (!data) return null;

  return (
    <section>
      <div className="container">
        <SectionHeading heading="Products" />
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.products?.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
