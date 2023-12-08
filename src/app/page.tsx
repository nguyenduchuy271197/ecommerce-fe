import Banner from "./_components/banner";
import CategoriesGrid from "./_components/categories-grid";
import FeaturedProducts from "./_components/featured-products";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Banner src="/banner.jpeg" heading="Home" />
      {/* <FeaturedProducts /> */}
      <CategoriesGrid />
    </div>
  );
}
