import { Metadata } from "next";
import Image from "next/image";

import backgroundImage from "@/assets/background.jpg";

import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
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
          left: "20vh",
          top: "30vh",
        }}
      >
        <h1 className="text-6xl p-2 my-4">Welcome to Our Store</h1>
        <p className="text-2xl p-2 my-4">
          You can find a variety of products here.
        </p>
      </section>
    </>
  );
}
