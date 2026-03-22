function Calculate(radius, height) {

    const radiusNum = parseFloat(radius)
    const heightNum = parseFloat(height)

    if (isNaN(radiusNum) || isNaN(heightNum)) {
        return null
    }

    return Math.PI * radiusNum * radiusNum * heightNum
}

export default Calculate