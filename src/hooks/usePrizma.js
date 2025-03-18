export const UsePrizma = (length, width, diagonal, lengthSqrt, widthSqrt, diagonalSqrt, funcVolume, funcSquare) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((diagonal ** 2 > (length ** 2 + width ** 2)) && 
    (diagonal > 0) && (length > 0) && (width > 0)) {
        let height = Math.sqrt((diagonal ** 2) * diagonalSqrt - ((length ** 2) * lengthSqrt + (width **2)) * widthSqrt)
        let volume = length * width * height
        let square = 2 * (length * width + width * height + height * length)
        funcVolume(round100(volume, 100))
        funcSquare(round100(square, 100))
    }

}