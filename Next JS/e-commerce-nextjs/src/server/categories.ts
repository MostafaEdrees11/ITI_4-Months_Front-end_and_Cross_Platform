export const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
};
