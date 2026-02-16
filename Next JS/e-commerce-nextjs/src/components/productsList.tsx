"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ProductCard from "./productCard";
import { getProducts } from "../server/products";

export default function ProductsList() {
  const searchParams = useSearchParams();
  const filteredPrice = searchParams.get("price") ?? "all";

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", filteredPrice],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-white text-lg">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500 text-lg">Error loading products</p>
      </div>
    );
  }

  const products = data?.products || [];
  let filtedProducts = [];

  if (filteredPrice == "all") {
    filtedProducts = products;
  }

  if (filteredPrice == "chip") {
    filtedProducts = products.filter((product: any) => product.price < 10);
  }

  if (filteredPrice == "medium") {
    filtedProducts = products.filter(
      (product: any) => product.price >= 10 && product.price < 30,
    );
  }

  if (filteredPrice == "expensive") {
    filtedProducts = products.filter((product: any) => product.price >= 30);
  }

  return (
    <>
      {filtedProducts.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
