import { IProduct } from "@/Models/IProduct";

/*
  Create a service class similar to Angular to make tests for data fetching a bit easier
*/
class ProductService {
  static async getProducts() {
    const products: IProduct[] = [];
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    data.products?.forEach((product: IProduct) => {
      products.push(product);
    });
    return products;
  }

  static async filterProducts(filter: string) {
    const products: IProduct[] = [];
    const res = await fetch(`https://dummyjson.com/products/search?q=${filter}`);
    const data = await res.json();
    data.products?.forEach((product: IProduct) => {
      products.push(product);
    });
    return products;
  }

  static async getProduct(productId: number) {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = (await res.json()) as IProduct;
    return product;
  }

  static currencyFormat(num: number) {
    return "$" + num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}

export default ProductService;
