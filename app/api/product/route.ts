import ProductService from "@/Components/ProductService";
import { IProduct } from "@/Models/IProduct";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId") || "";
  try {
    const products = await ProductService.getProduct(parseInt(productId));
    return Response.json(products);
  } catch (e) {
    console.error(e);
  }
}
