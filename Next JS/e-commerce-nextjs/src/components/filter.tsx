"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function filterPrice(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("price", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 text-white h-20">
      <button
        className=" p-2 m-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-600"
        onClick={() => filterPrice("all")}
      >
        all
      </button>
      <button
        className=" p-2 m-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-600"
        onClick={() => filterPrice("chip")}
      >
        chip
      </button>
      <button
        className=" p-2 m-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-600"
        onClick={() => filterPrice("medium")}
      >
        medium
      </button>
      <button
        className=" p-2 m-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-600"
        onClick={() => filterPrice("expensive")}
      >
        expensive
      </button>
    </div>
  );
}
