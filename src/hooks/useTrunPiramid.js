export const UseTrunPiramid = (lengthDown, lengthDownUnit, lengthTop, lengthTopUnit, height, heightUnit, funcSquareFull) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (lengthDownUnit === 'м') {
        lengthDown = lengthDown * 100
    } else if (lengthDownUnit === 'дм') {
        lengthDown = lengthDown * 10
    } else if (lengthDownUnit === 'мм') {
        lengthDown = lengthDown / 10
    }
    if (lengthTopUnit === 'м') {
        lengthTop = lengthTop * 100
    } else if (lengthTopUnit === 'дм') {
        lengthTop = lengthTop * 10
    } else if (lengthTopUnit === 'мм') {
        lengthTop = lengthTop / 10
    }
    if (heightUnit === 'м') {
        height = height * 100
    } else if (heightUnit === 'дм') {
        height = height * 10
    } else if (heightUnit === 'мм') {
        height = height / 10
    }
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        let apothem = Math.sqrt((lengthDown / 2 - lengthTop / 2) ** 2 + height ** 2)
        let perimeterDown = 4 * lengthDown
        let perimeterTop = 4 * lengthTop
        let squareSide = (perimeterDown + perimeterTop) * apothem / 2

        let squareFull = (lengthDown ** 2) + (lengthTop ** 2) + squareSide
        funcSquareFull(round100(squareFull))
    }
}