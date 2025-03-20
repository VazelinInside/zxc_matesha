export const UsePrizmaSecond = (lengthNum, widthNum, angle, squareNum, lengthSqrt, widthSqrt, squareSqrt, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var length = lengthNum * Math.sqrt(lengthSqrt)
    var width = widthNum * Math.sqrt(widthSqrt)
    var square = squareNum * Math.sqrt(squareSqrt)

    if (length && width && angle && square) {
        let radian = angle * Math.PI / 180
        let perimeter = (Number(length) + Number(width)) * 2
        let height = square / perimeter
        let base = (length) * (width) * Math.sin(radian)
        let volume = base * height
        funcVolume(round100(volume))
    }

}