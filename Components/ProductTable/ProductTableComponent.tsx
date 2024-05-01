import { IProduct } from "@/Models/IProduct";
import styles from "./productTable.module.css";
import ProductService from "../ProductService";
import Loader from "../Loader";
import { Suspense } from "react";

export default function ProductTable({ products }: { products: IProduct[] }) {
  /* 
    Use  table-responsive so table looks better on a mobile device
   */
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">View</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Discount</th>
                <th scope="col">Rating</th>
                <th scope="col">Stock</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Preview</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product: IProduct, i) => (
                <tr key={i}>
                  <td>{product.title}</td>
                  <td>
                    <a href={`/product?productId=${product.id}`}>View</a>
                  </td>
                  <td>{ProductService.currencyFormat(product.price)}</td>
                  <td>{product.description}</td>
                  <td>{product.discountPercentage}%</td>
                  <td>{product.rating}</td>
                  <td>{product.stock}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>
                    <img className={styles.imgWrapper} src={product.thumbnail}></img>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </>
  );
}
