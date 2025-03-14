export const UsePyramid = (length, lengthUnit, height, heightUnit, funcVolume, funcSquareFull, funcSquareSide, funcSide) => {

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
    if (heightUnit === 'м') {
        height = height * 100
    } else if (heightUnit === 'дм') {
        height = height * 10
    } else if (heightUnit === 'мм') {
        height = height / 10
    }
    
    if (length > 0) {
        let radius = Math.sqrt(2 * (length / 2) ** 2) 
        let apothem = Math.sqrt((radius ** 2) + ((length / 2) ** 2))
        let perimeter = 4 * length

        let volume = (length ** 2) * height / 3
        let squareSide = perimeter * apothem / 2
        let squareFull = (length ** 2) + squareSide
        let side = Math.sqrt((height ** 2) + (radius ** 2))
        funcVolume(round100(volume))
        funcSquareFull(round100(squareFull))
        funcSquareSide(round100(squareSide))
        funcSide(round100(side))
    }
}