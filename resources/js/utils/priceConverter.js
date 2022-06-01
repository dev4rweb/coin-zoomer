export const priceConverter = price => {

    if (price && Math.abs(price) / 1000000000 > 1) {
        const priceFormat = (price/1000000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} BN`;
    }
    if (price && Math.abs(price) / 1000000 > 1) {
        const priceFormat = (price/1000000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} M`;
    }
    if (price && Math.abs(price) / 1000 > 1) {
        const priceFormat = (price / 1000).toFixed(2);
        return `${priceFormat.replace('.', ' . ')} K`;
    }

    if (price && Math.abs(price) > 0.0000000000000000000001 && Math.abs(price) < 0.0000000000000000000002) {
        return price.toFixed(26)
    }

    if (price && Math.abs(price) > 0.000000000000000000001 && Math.abs(price) < 0.000000000000000000002) {
        return price.toFixed(25)
    }

    if (price && Math.abs(price) > 0.00000000000000000001 && Math.abs(price) < 0.00000000000000000002) {
        return price.toFixed(24)
    }

    if (price && Math.abs(price) > 0.0000000000000000001 && Math.abs(price) < 0.0000000000000000002) {
        return price.toFixed(23)
    }

    if (price && Math.abs(price) > 0.000000000000000001 && Math.abs(price) < 0.000000000000000002) {
        return price.toFixed(22)
    }

    if (price && Math.abs(price) > 0.00000000000000001 && Math.abs(price) < 0.00000000000000002) {
        return price.toFixed(21)
    }

    if (price && Math.abs(price) > 0.0000000000000001 && Math.abs(price) < 0.0000000000000002) {
        return price.toFixed(20)
    }

    if (price && Math.abs(price) > 0.000000000000001 && Math.abs(price) < 0.000000000000002) {
        return price.toFixed(19)
    }

    if (price && Math.abs(price) > 0.00000000000001 && Math.abs(price) < 0.00000000000002) {
        return price.toFixed(18)
    }

    if (price && Math.abs(price) > 0.0000000000001 && Math.abs(price) < 0.0000000000002) {
        return price.toFixed(17)
    }

    if (price && Math.abs(price) > 0.000000000001 && Math.abs(price) < 0.000000000002) {
        return price.toFixed(16)
    }

    if (price && Math.abs(price) > 0.00000000001 && Math.abs(price) < 0.00000000002) {
        return price.toFixed(15)
    }

    if (price && Math.abs(price) > 0.0000000001 && Math.abs(price) < 0.0000000002) {
        return price.toFixed(14)
    }

    if (price && Math.abs(price) > 0.000000001 && Math.abs(price) < 0.000000002) {
        return price.toFixed(13)
    }

    if (price && Math.abs(price) > 0.00000001 && Math.abs(price) < 0.00000002) {
        return price.toFixed(12)
    }

    if (price && Math.abs(price) > 0.0000001 && Math.abs(price) < 0.0000002) {
        return price.toFixed(11)
    }

    if (price && Math.abs(price) > 0.000001 && Math.abs(price) < 0.000002) {
        return price.toFixed(10)
    }

    if (price && Math.abs(price) > 0.00001 && Math.abs(price) < 0.00002) {
        return price.toFixed(9)
    }

    if (price && Math.abs(price) > 0.0001 && Math.abs(price) < 0.0002) {
        return price.toFixed(8)
    }

    if (price && Math.abs(price) > 0.001 && Math.abs(price) < 0.002) {
        return price.toFixed(7)
    }

    if (price && Math.abs(price) > 0.01 && Math.abs(price) < 0.02) {
        return price.toFixed(6)
    }

    if (price && Math.abs(price) > 0.1 && Math.abs(price) < 0.2) {
        return price.toFixed(5)
    }

    if (price && Math.abs(price) > 0 && Math.abs(price) < 1) {
        return price.toFixed(4)
    }

    // return price ? price.toFixed(2) : price;
    return price
};
