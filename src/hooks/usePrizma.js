export const UseVolumeAndSquare = (length, lengthUnit, width, widthUnit, diagonal, diagonalUnit, funcVolume, funcSquare) => {

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
    if (diagonalUnit === 'м') {
        diagonal = diagonal * 100
    } else if (diagonalUnit === 'дм') {
        diagonal = diagonal * 10
    } else if (diagonalUnit === 'мм') {
        diagonal = diagonal / 10
    }
    
    if ((diagonal ** 2 > (length ** 2 + width ** 2)) && 
    (diagonal > 0) && (length > 0) && (width > 0)) {
        let height = Math.sqrt(diagonal ** 2 - (length ** 2 + width **2))
        let volume = length * width * height
        let square = 2 * (length * width + width * height + height * length)
        funcVolume(round100(volume, 100))
        funcSquare(round100(square, 100))
    }

}