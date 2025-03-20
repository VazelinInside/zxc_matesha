export const UsePrizmaSecond = (length, width, angle, square, lengthSqrt, widthSqrt, squareSqrt, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    if (length && width && angle && square) {
        let radian = angle * Math.PI / 180
        let perimeter = ((Number(length) * Math.sqrt(lengthSqrt)) + (Number(width) * Math.sqrt(widthSqrt))) * 2
        let height = (square * Math.sqrt(squareSqrt)) / perimeter
        let base = (length * Math.sqrt(lengthSqrt)) * (width * Math.sqrt(width)) * Math.sin(radian)
        let volume = base * height
        funcVolume(round100(volume))
    }

}