export const UseTrunPiramidSecond = (lengthDownNum , lengthTopNum , apothemNum, lengthDownSqrt, lengthTopSqrt, apothemSqrt, funcSideRib, funcSquareSide, funcSquareFull, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var lengthDown = lengthDownNum * Math.sqrt(lengthDownSqrt)
    var lengthTop = lengthTopNum  * Math.sqrt(lengthTopSqrt)
    var apothem = apothemNum  * Math.sqrt(apothemSqrt)
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        
        let height = Math.sqrt(apothem ** 2 - (lengthDown / (2 * Math.sqrt(3)) - lengthTop / (2 * Math.sqrt(3))) ** 2)
        let perimeterDown = 3 * lengthDown
        let perimeterTop = 3 * lengthTop
        let squareDown = lengthDown ** 2 * Math.sqrt(3) / 4
        let squareTop = lengthTop ** 2 * Math.sqrt(3) / 4
        let radiusDown = lengthDown / Math.sqrt(3)
        let radiusTop = lengthTop / Math.sqrt(3)

        let sideRib = Math.sqrt(height ** 2 + (radiusDown - radiusTop) ** 2)
        let squareSide = (perimeterDown + perimeterTop) * apothem / 2
        let squareFull = squareDown + squareTop + squareSide
        let volume = height * (squareDown + Math.sqrt(squareDown * squareTop) + squareTop) / 3
        funcSideRib(round100(sideRib))
        funcSquareSide(round100(squareSide))
        funcSquareFull(round100(squareFull))
        funcVolume(round100(volume))
    }
}