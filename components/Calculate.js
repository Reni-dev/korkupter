function Calculate(radius, height) {

    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (isNaN(r) || isNaN(h)) {
        return null;
    }

    return Math.PI * r * r * h;
}

export default Calculate