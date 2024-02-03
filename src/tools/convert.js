/**
 * Price as string to numeric value
 * @param {string} price 
 */
export const dollarToNumber = (price) => {
    const priceUnit = [
        'ریال',
        '$'
    ];
    priceUnit.forEach(unit => price = price.replace(unit, ""));
    return price;
}

export const convertItems = (items) => {
    return items.map(item => ({
        ...item,
        price_num: dollarToNumber(item.price)
    }))
}