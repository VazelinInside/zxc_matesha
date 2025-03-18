export const UseTrunPiramidSecond = (lengthDown, lengthTop, apothem, lengthDownSqrt, lengthTopSqrt, apothemSqrt, funcSideRib, funcSquareSide, funcSquareFull, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((lengthDown > 0) && (lengthDown > lengthTop)) {
        
        let height = Math.sqrt((apothem * Math.sqrt(apothemSqrt)) ** 2 - ((lengthDown * Math.sqrt(lengthDownSqrt)) / (2 * Math.sqrt(3)) - (lengthTop * Math.sqrt(lengthTopSqrt)) / (2 * Math.sqrt(3))) ** 2)
        let perimeterDown = 3 * (lengthDown * Math.sqrt(lengthDownSqrt))
        let perimeterTop = 3 * (lengthTop * Math.sqrt(lengthTopSqrt))
        let squareDown = (lengthDown * Math.sqrt(lengthDownSqrt)) ** 2 * Math.sqrt(3) / 4
        let squareTop = (lengthTop * Math.sqrt(lengthTopSqrt)) ** 2 * Math.sqrt(3) / 4

        let sideRib = (height ** 2 + ((lengthDown * Math.sqrt(lengthDownSqrt)) / Math.sqrt(3) - (lengthTop * Math.sqrt(lengthTopSqrt)) / Math.sqrt(3)) ** 2) ** 0.5
        let squareSide = (perimeterDown + perimeterTop) * (apothem * Math.sqrt(apothemSqrt)) / 2
        let squareFull = squareDown + squareTop + squareSide
        let volume = height * (squareDown + Math.sqrt(squareDown * squareTop) + squareTop) / 3
        funcSideRib(round100(sideRib))
        funcSquareSide(round100(squareSide))
        funcSquareFull(round100(squareFull))
        funcVolume(round100(volume))
    }
}