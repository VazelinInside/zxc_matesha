export const UseTrunPiramid = (lengthDown, lengthTop, height, lengthDownSqrt, lengthTopSqrt, heightSqrt, funcSideRib, funcSquareSide, funcSquareFull, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (((lengthDown * Math.sqrt(lengthDownSqrt)) > 0) && (lengthDown > lengthTop)) {
        let apothem = Math.sqrt((lengthDown / 2 - lengthTop / 2) ** 2 + height ** 2)
        let perimeterDown = 4 * (lengthDown * Math.sqrt(lengthDownSqrt))
        let perimeterTop = 4 * (lengthTop * Math.sqrt(lengthTopSqrt))
        let squareDown = (lengthDown * Math.sqrt(lengthDownSqrt)) ** 2
        let squareTop = (lengthTop * Math.sqrt(lengthTopSqrt)) ** 2

        let squareSide = (perimeterDown + perimeterTop) * apothem / 2
        let sideRib = ((apothem ** 2) + ((lengthDown * Math.sqrt(lengthDownSqrt)) - (lengthTop * Math.sqrt(lengthTopSqrt))) ** 2) ** 0.5
        let squareFull = squareDown + squareTop + squareSide
        let volume = (height * Math.sqrt(heightSqrt)) * (squareDown + squareTop + (squareDown * squareTop) ** 0.5) / 3
        funcSideRib(round100(sideRib))
        funcSquareSide(round100(squareSide))
        funcSquareFull(round100(squareFull))
        funcVolume(round100(volume))
    }
}