import { IProduct } from "@/Models/IProduct";
import Logger from "./Logger";

/*
  Create a service class similar to Angular to make tests for data fetching a bit easier
*/
class ProductService {
  static async getProducts() {
    try {
      let products: IProduct[] = [];
      const res = await fetch("https://dummyjson.com/products");

      if (res.status != 200) {
        Logger.Error(`Error getting products: ${res.statusText}`);
        return [];
      }

      const data = await res.json();
      products = data.products as IProduct[];

      return products;
    } catch (e) {
      Logger.Error(e);
    }
  }

  static async filterProducts(filter: string) {
    try {
      let products: IProduct[] = [];
      const res = await fetch(`https://dummyjson.com/products/search?q=${filter}`);

      if (res.status != 200) {
        Logger.Error(`Error filtering products: ${res.statusText}`);
        return [];
      }

      const data = await res.json();
      products = data.products as IProduct[];

      return products;
    } catch (e) {
      Logger.Error(e);
    }
  }

  static async getProduct(productId: number) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);

      if (res.status != 200) {
        Logger.Error(`Error getting product: ${res.statusText}`);
        return {};
      }

      const product = (await res.json()) as IProduct;
      return product;
    } catch (e) {
      Logger.Error(e);
    }
  }

  static currencyFormat(num: number) {
    return "$" + num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
}

export default ProductService;
