export const UsePyramid = (lengthNum, heightNum, lengthSqrt, heightSqrt, funcVolume, funcSquareFull, funcSquareSide, funcSide) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var length = lengthNum * Math.sqrt(lengthSqrt)
    var height = heightNum * Math.sqrt(heightSqrt)
    
    if (length > 0) {
        let radius = length / 2
        let apothem = Math.sqrt(radius ** 2 + height ** 2)
        let perimeter = 4 * length

        let volume = length ** 2 * height / 3
        let squareSide = perimeter * apothem / 2
        let squareFull = length ** 2 + squareSide
        let side = Math.sqrt(((length / 2) ** 2) + (apothem ** 2))
        funcVolume(round100(volume))
        funcSquareFull(round100(squareFull))
        funcSquareSide(round100(squareSide))
        funcSide(round100(side))
    }
}