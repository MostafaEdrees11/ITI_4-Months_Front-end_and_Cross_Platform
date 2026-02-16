export const getProduct = async (productId: number) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  return res.json();
};
