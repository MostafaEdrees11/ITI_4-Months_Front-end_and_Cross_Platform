import type { Metadata } from "next";

import Box from "@mui/material/Box";
import ProductsList from "@/components/productsList";
import { Suspense } from "react";
import Filter from "@/components/filter";

export const metadata: Metadata = {
  title: "Products Page",
};

interface Props {
  searchParams: Promise<{
    price: string;
  }>;
}

export default async function page({ searchParams }: Props) {
  const { price } = await searchParams;

  return (
    <>
      <h1 className="text-3xl text-white mx-4 my-2">Our Products: </h1>
      <Suspense
        fallback={
          <div className="text-white text-xl mx-4">Loading products...</div>
        }
      >
        <Filter />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            padding: 2,
            backgroundColor: "#1A2CA3",
          }}
        >
          <ProductsList />
        </Box>
      </Suspense>
    </>
  );
}
