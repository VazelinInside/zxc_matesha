export const UseVolumePrizma = (length, lengthUnit, width, widthUnit, angle, square, squareUnit, funcVolume) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (lengthUnit === 'м') {
        length = length * 100
    } else if (lengthUnit === 'дм') {
        length = length * 10
    } else if (lengthUnit === 'мм') {
        length = length / 10
    }
    if (widthUnit === 'м') {
        width = width * 100
    } else if (widthUnit === 'дм') {
        width = width * 10
    } else if (widthUnit === 'мм') {
        width = width / 10
    }
    if (squareUnit === 'м') {
        square = square * 10000
    } else if (squareUnit === 'дм') {
        square = square * 100
    } else if (squareUnit === 'мм') {
        square = square / 100
    }

    if (length, width, angle, square) {
        let radian = angle * Math.PI / 180
        let perimeter = (Number(length) + Number(width)) * 2
        let height = square / perimeter
        let base = length * width * Math.sin(radian)
        let volume = base * height
        funcVolume(round100(volume))
    }

}