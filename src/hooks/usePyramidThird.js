export const UsePyramidThird = (height, apothem, heightSqrt, apothemSqrt, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (((height * Math.sqrt(heightSqrt)) > 0) && ((apothem * Math.sqrt(apothemSqrt)) > (height * Math.sqrt(heightSqrt)))) {
        let radiusMini = Math.sqrt((apothem * Math.sqrt(apothemSqrt)) ** 2 - (height * Math.sqrt(heightSqrt)) ** 2)
        let length = radiusMini * 2 * Math.sqrt(3)
        let perimeter = length * 3
        let squareBase = length ** 2 * Math.sqrt(3) / 4
        let squareSide = perimeter * (apothem * Math.sqrt(apothemSqrt)) / 2

        let squareFull = squareBase + squareSide
        funcSquareFull(round100(squareFull))
    }
}