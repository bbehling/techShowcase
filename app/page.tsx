import ProductsService from "@/Components/ProductService";
import { IProduct } from "@/Models/IProduct";
import styles from "./page.module.css";
import ProductTable from "@/Components/ProductTable/ProductTableComponent";
import Filter from "@/Components/Filter/FilterComponent";

function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default async function Home() {
  const products = await ProductsService.getProducts();
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
