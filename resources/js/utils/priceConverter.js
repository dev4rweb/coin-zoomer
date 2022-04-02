export const priceConverter = price => {
    if (price && price / 1000000000 > 1) {
        const priceFormat = (price/1000000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} BN`;
    }
    if (price && price / 1000000 > 1) {
        const priceFormat = (price/1000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} M`;
    }
    if (price && price / 1000 > 1) {
        const priceFormat = (price / 1000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} K`;
    }

    if (price && price > 0 && price < 1) {
        return price.toFixed(9)
    }

    return price ? price.toFixed(2) : price;
};
