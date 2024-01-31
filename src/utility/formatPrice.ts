/**
 * @desc formatPrice: function to format price into human readable form
 * @param {*} price
 * @Return returns formatted price
 */

export const formatPrice = (price:number=0) => {
  let formattedPrice;
  const priceToString = price?.toString()
  const length = priceToString?.length
  length === 4 
      ? formattedPrice = `${priceToString?.substring(0,1)},${priceToString?.substring(1)}` 
          : length === 5 ? formattedPrice = `${priceToString?.substring(0,2)},${priceToString?.substring(2)}`
              : length === 6 ? formattedPrice = `${priceToString?.substring(0,3)},${priceToString?.substring(3)}`
                  : length === 7 ? formattedPrice = `${priceToString?.substring(0,1)},${priceToString?.substring(1,4)},${priceToString?.substring(4)}`
                      : length === 8 ? formattedPrice = `${priceToString?.substring(0,2)},${priceToString?.substring(2,5)},${priceToString?.substring(5)}`
                          : length === 9 ? formattedPrice = `${priceToString?.substring(0,3)},${priceToString?.substring(3,6)},${priceToString?.substring(6)}`
                          :  formattedPrice = `${priceToString}`
  return formattedPrice
}
