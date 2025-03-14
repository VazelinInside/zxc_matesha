export const UseTrunPiramidSecond = (lengthDown, lengthDownUnit, lengthTop, lengthTopUnit, apothem, apothemUnit, funcVolume) => {

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
    if (apothemUnit === 'м') {
        apothem = apothem * 100
    } else if (apothemUnit === 'дм') {
        apothem = apothem * 10
    } else if (apothemUnit === 'мм') {
        apothem = apothem / 10
    }
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        
        let height = Math.sqrt(apothem ** 2 - (lengthDown / 2 - lengthTop / 2) ** 2)
        let perimeterDown = 3 * lengthDown
        let perimeterTop = 3 * lengthTop
        let squareSide = (perimeterDown + perimeterTop) * apothem / 2
        let squareDown = lengthDown ** 2 * Math.sqrt(3) / 4
        let squareTop = lengthTop ** 2 * Math.sqrt(3) / 4

        let volume = height * (squareDown + Math.sqrt(squareDown * squareTop) + squareTop) / 3
        funcVolume(round100(volume))
    }
}