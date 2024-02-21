/**
 * @desc currencyFormat: function to format price into human readable form
 * @param {*} num
 * @Return returns formatted price
 */

export const  currencyFormat = function (num: number, decimalPlace: number = 0) {
    return '₦' + num.toFixed(decimalPlace).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const refindedReview = <T>(reviews: T[], count=2): T[][] => {
    const refindedResult = [];
    for (let index = 0; index < reviews?.length; index += count) {
        refindedResult.push(reviews.slice(index, index+count));
    }
    return refindedResult;
}


 