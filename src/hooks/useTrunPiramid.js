export const UseTrunPiramid = (lengthDown, lengthTop, height, funcSideRib, funcSquareSide, funcSquareFull, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        let apothem = Math.sqrt((lengthDown / 2 - lengthTop / 2) ** 2 + height ** 2)
        let perimeterDown = 4 * lengthDown
        let perimeterTop = 4 * lengthTop
        let squareDown = lengthDown ** 2
        let squareTop = lengthTop ** 2

        let squareSide = (perimeterDown + perimeterTop) * apothem / 2
        let sideRib = ((apothem ** 2) + (lengthDown - lengthTop) ** 2) ** 0.5
        let squareFull = squareDown + squareTop + squareSide
        let volume = height * (squareDown + squareTop + (squareDown + squareTop) ** 0.5) / 3
        funcSideRib(round100(sideRib))
        funcSquareSide(round100(squareSide))
        funcSquareFull(round100(squareFull))
        funcVolume(round100(volume))
    }
}