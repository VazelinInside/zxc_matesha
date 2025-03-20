export const UsePyramidThird = (heightNum, apothemNum, heightSqrt, apothemSqrt, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var height = heightNum * Math.sqrt(heightSqrt)
    var apothem = apothemNum * Math.sqrt(apothemSqrt)
    
    if ((height > 0) && (apothem > height)) {
        let radiusMini = Math.sqrt(apothem ** 2 - height ** 2)
        let length = radiusMini * 2 * Math.sqrt(3)
        let perimeter = length * 3
        let squareBase = length ** 2 * Math.sqrt(3) / 4
        let squareSide = perimeter * apothem / 2

        let squareFull = squareBase + squareSide
        funcSquareFull(round100(squareFull))
    }
}