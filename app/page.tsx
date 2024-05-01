import ProductsService from "@/Components/ProductService";
import ProductTable from "@/Components/ProductTable/ProductTableComponent";
import Filter from "@/Components/Filter/FilterComponent";

export default async function Home() {
  const products = (await ProductsService.getProducts()) || [];
  return (
    <main>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mx-auto">
            <Filter />
          </div>
        </div>
        <ProductTable products={products} />
      </div>
    </main>
  );
}
