export const getCart = async (cartId: number = 1) => {
  const res = await fetch(`https://dummyjson.com/carts/${cartId}`);
  return res.json();
};
