import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="categories-layout">
      <h1 className="text-xl text-white mx-8 my-4">Categories Page</h1>
      <main className="categories-main">{children}</main>
    </div>
  );
}
