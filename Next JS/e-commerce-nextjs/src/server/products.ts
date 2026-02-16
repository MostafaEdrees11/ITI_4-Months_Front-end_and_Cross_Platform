export const getProducts = async () => {
  const products = await fetch("https://dummyjson.com/products");
  return products.json();
};
