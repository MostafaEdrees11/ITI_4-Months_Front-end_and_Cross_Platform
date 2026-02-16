"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import backgroundImage from "@/assets/background.jpg";
import { Fraunces } from "next/font/google";
import Chip from "@mui/material/Chip";
import { getCategories } from "@/server/categories";

const fraunces = Fraunces({
  subsets: ["latin"],
});

export default function CategoriesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
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
            left: "15vh",
            top: "20vh",
          }}
        >
          <h1 className="text-6xl p-2 my-4">Our Categories</h1>
          <p className="text-2xl p-2">Loading categories...</p>
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
            left: "15vh",
            top: "20vh",
          }}
        >
          <h1 className="text-6xl p-2 my-4">Our Categories</h1>
          <p className="text-2xl p-2 text-red-500">Error loading categories</p>
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
          left: "15vh",
          top: "20vh",
        }}
      >
        <h1 className="text-6xl p-2 my-4">Our Categories</h1>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            width: "50%",
            margin: "8px",
          }}
        >
          {data?.map((category: any) => (
            <Chip
              key={category.name}
              label={category.name}
              component="a"
              href={category.url}
              target="_blank"
              color="success"
              clickable
              sx={{ fontSize: "18px", padding: "2px" }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
