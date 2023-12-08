import ProductCard from "@/components/cards/product";
import SectionHeading from "../../components/section-heading";

export default function FeaturedProducts() {
  const products = [
    {
      id: "1",
      slug: "basic-tee-1",
      thumbnail:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Basic Tee 1",
      price: 24.0,
    },
    {
      id: "2",
      slug: "basic-tee-2",
      thumbnail:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Basic Tee 2",
      price: 24.0,
    },
    {
      id: "3",
      slug: "basic-tee-3",
      thumbnail:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Basic Tee 3",
      price: 24.0,
    },
    {
      id: "4",
      slug: "basic-tee-4",
      thumbnail:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Basic Tee 4",
      price: 24.0,
    },
  ];
  return (
    <section>
      <div className="container">
        <SectionHeading heading="Featured Products" />
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
}
