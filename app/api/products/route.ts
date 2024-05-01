import ProductService from "@/Components/ProductService";
import { IProduct } from "@/Models/IProduct";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter") || "";
  try {
    const products = await ProductService.filterProducts(filter);
    return Response.json(products);
  } catch (e) {
    console.error(e);
  }
}
