"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import { Fraunces } from "next/font/google";
import { getProduct } from "@/server/product";

const fraunces = Fraunces({
  subsets: ["latin"],
});

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.productId);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  if (isLoading) {
    return (
      <>
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          quality={100}
          style={{ zIndex: -1 }}
        />
        <section
          className={` text-white ${fraunces.className}`}
          style={{
            position: "absolute",
            left: "10vh",
            top: "15vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <h1 className="text-4xl p-2 my-4">Loading product...</h1>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          quality={100}
          style={{ zIndex: -1 }}
        />
        <section
          className={` text-white ${fraunces.className}`}
          style={{
            position: "absolute",
            left: "10vh",
            top: "15vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <h1 className="text-4xl p-2 my-4 text-red-500">
              Error loading product
            </h1>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        quality={100}
        style={{ zIndex: -1 }}
      />
      <section
        className={` text-white ${fraunces.className}`}
        style={{
          position: "absolute",
          left: "10vh",
          top: "15vh",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 className="text-4xl p-2 my-4">{data?.title}</h1>
          <p className="text-xl p-2 my-4">{data?.description}</p>
          <p className="text-xl p-2 my-4">Price: ${data?.price}</p>
        </div>
      </section>
    </>
  );
}
