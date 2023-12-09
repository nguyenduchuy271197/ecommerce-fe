import SectionHeading from "@/components/section-heading";
import Product from "@/components/cards/product";
import { CategoryId } from "@/types";
import { useProductsByCategoryQuery } from "@/hooks/product/queries";
import ProductSkeleton from "./product-skeleton";

export default function FilterableProducts({
  categoryId,
}: {
  categoryId: CategoryId;
}) {
  const { data, isLoading } = useProductsByCategoryQuery(categoryId);

  if (!data) return <ProductSkeleton />;

  return (
    <section>
      <div className="container">
        <SectionHeading heading="Products" />

        {isLoading ? (
          <ProductSkeleton />
        ) : (
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.products?.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.product_images[0].url}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
