"use client";
import Filter from "@/Components/Filter/FilterComponent";
import ProductTable from "@/Components/ProductTable/ProductTableComponent";
import useSWR from "swr";

export default function Products({ searchParams }) {
  //const searchParams = useSearchParams();

  const filter = searchParams["filter"];

  const fetcher = async (url: string) => {
    let res = await fetch(`${url}`);
    return await res.json();
  };

  const { data: products } = useSWR(`/api/products?filter=${filter}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mx-auto">
          <Filter filterParam={filter} />
        </div>
      </div>
      <ProductTable products={products} />
      <div className="d-flex justify-content-center mt-3">
        <a className="btn btn-primary" href="/">
          Back to Products
        </a>
      </div>
    </div>
  );
}
