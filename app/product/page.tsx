"use client";
import useSWR from "swr";
import ProductComponent from "@/Components/Product/ProductComponent";
import Loader from "@/Components/Loader";

export default function Product({ searchParams }) {
  const productId = searchParams["productId"];

  const fetcher = async (url: string) => {
    let res = await fetch(`${url}`);
    return await res.json();
  };

  const { data: product } = useSWR(`/api/product?productId=${productId}`, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  });

  return (
    <>
      {!product && <Loader />}
      {product && <ProductComponent product={product} />}
    </>
  );
}
