function random() {
    return Math.random();
}

function floor(num) {
    return Math.floor(num);
}

export function randint(start, end) {
    return floor(random() * (end - start));
}
