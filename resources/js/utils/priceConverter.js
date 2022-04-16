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

    if (price && price > 0.00001 && price < 0.00002) {
        return price.toFixed(9)
    }

    if (price && price > 0.0001 && price < 0.0002) {
        return price.toFixed(8)
    }

    if (price && price > 0.001 && price < 0.002) {
        return price.toFixed(7)
    }

    if (price && price > 0.01 && price < 0.02) {
        return price.toFixed(6)
    }

    if (price && price > 0.1 && price < 0.2) {
        return price.toFixed(5)
    }

    if (price && price > 0 && price < 1) {
        return price.toFixed(4)
    }

    return price ? price.toFixed(2) : price;
    // return price
};
