export const UsePyramidThird = (height, heightUnit, apothem, apothemUnit, funcSqareFull) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (heightUnit === 'м') {
        height = height * 100
    } else if (heightUnit === 'дм') {
        height = height * 10
    } else if (heightUnit === 'мм') {
        height = height / 10
    }
    if (apothemUnit === 'м') {
        apothem = apothem * 100
    } else if (apothemUnit === 'дм') {
        apothem = apothem * 10
    } else if (apothemUnit === 'мм') {
        apothem = apothem / 10
    }
    
    if ((height > 0) && (apothem > height)) {
        let radiusMini = Math.sqrt(apothem ** 2 - height ** 2)
        let length = radiusMini * 2 * Math.sqrt(3)
        let perimeter = length * 3
        let squareBase = length ** 2 * Math.sqrt(3) / 4
        let squareSide = perimeter * apothem / 2

        let squareFull = squareBase + squareSide
        funcSqareFull(round100(squareFull))
    }
}