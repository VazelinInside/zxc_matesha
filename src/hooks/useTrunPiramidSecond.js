export const UseTrunPiramidSecond = (lengthDown, lengthTop, apothem, funcSideRib, funcSquareSide, funcSquareFull, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        
        let height = Math.sqrt(apothem ** 2 - (lengthDown / 2 - lengthTop / 2) ** 2)
        let perimeterDown = 3 * lengthDown
        let perimeterTop = 3 * lengthTop
        let squareDown = lengthDown ** 2 * Math.sqrt(3) / 4
        let squareTop = lengthTop ** 2 * Math.sqrt(3) / 4

        let sideRib = ((apothem ** 2) + (lengthDown - lengthTop) ** 2) ** 0.5
        let squareSide = (perimeterDown + perimeterTop) * apothem / 2
        let squareFull = squareDown + squareTop + squareSide
        let volume = height * (squareDown + Math.sqrt(squareDown * squareTop) + squareTop) / 3
        funcSideRib(round100(sideRib))
        funcSquareSide(round100(squareSide))
        funcSquareFull(round100(squareFull))
        funcVolume(round100(volume))
    }
}