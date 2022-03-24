export const priceConverter = price => {
    if (price / 1000000000 > 1) {
        const priceFormat = (price/1000000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} BN`;
    }
    if (price / 1000000 > 1) {
        const priceFormat = (price/1000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} M`;
    }
    if (price / 1000 > 1) {
        const priceFormat = (price / 1000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} K`;
    }

    return price.toFixed(2)
};
