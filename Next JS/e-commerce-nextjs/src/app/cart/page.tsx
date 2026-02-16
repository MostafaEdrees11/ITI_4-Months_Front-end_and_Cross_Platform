"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getCart } from "@/server/cart";

export default function Cart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", 1],
    queryFn: () => getCart(1),
  });

  if (isLoading) {
    return (
      <div className="relative overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
        />
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-4xl font-semibold">Loading cart...</h1>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
        />
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-4xl font-semibold text-red-500">
            Error loading cart
          </h1>
        </section>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
      />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              Your checkout hub
            </p>
            <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
              Cart Overview
            </h1>
            <p className="mt-3 max-w-xl text-base text-blue-100/80">
              Review your picks, tweak quantities, and see your savings at a
              glance.
            </p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            User ID: {data?.userId}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold">Products</h2>
            <p className="text-sm text-blue-100/70">
              Discounted Total: ${data?.discountedTotal}
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {data?.products.map((product: any) => {
              const lineTotal =
                product.total ?? product.price * product.quantity;
              const lineDiscounted = product.discountedTotal ?? lineTotal;

              return (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-4 md:flex-row md:items-center"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-blue-100/70">
                      ${product.price} each
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                      Qty {product.quantity}
                    </span>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                      Total ${lineTotal.toFixed(3)}
                    </span>
                    {lineDiscounted !== lineTotal && (
                      <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-200">
                        Now ${lineDiscounted}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-blue-100/70">
              Need more items? Keep browsing the shop.
            </div>
            <button
              type="button"
              className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
