import { IProduct } from "@/Models/IProduct";
import styles from "./productComponent.module.css";
import ProductService from "../ProductService";

export default function Product({ product }: { product: IProduct }) {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="d-flex justify-content-center">
          <img src={`${product?.images[0]}`} className={`card-img-top ${styles.imgWrapper}`} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product?.title}</h5>
          <p className="card-text">{product?.description}</p>
          <p className="card-text">Price: {ProductService.currencyFormat(product?.price)}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <a className="btn btn-primary" href="/">
          Back to Products
        </a>
      </div>
    </div>
  );
}
