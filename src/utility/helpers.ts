export const formmatTime = (date: number | Date) => {
  const dateTime = new Intl.DateTimeFormat('en').format(date).split('/');
  const res = dateTime.map(num => num.length === 1 ? num.padStart(2, '0'): num).join('-');
  return res;
}

/**
 * @description selects products at random and returns the specified number of products
 * @param products 
 * @param numberOfProducts (default: 10)
 * @returns products
 */
export const randomizedProducts = (products: ProductType[], numberOfProducts=10): ProductType[] => {
  const randomProducts = [] as ProductType[];
  const productLength = products.length - 1;
  for (let i = 0; i < productLength; i++) {
    if (randomProducts.length === numberOfProducts) break;
    const randomIndex = Math.floor(Math.random() * productLength);
    const prod = products[randomIndex]
    if (randomProducts.find(product => product.id === prod.id)) continue;
    else randomProducts.push(prod);
  }
  return randomProducts;
}