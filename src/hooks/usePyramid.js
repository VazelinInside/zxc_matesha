export const UsePyramid = (length, height, lengthSqrt, heightSqrt, funcVolume, funcSquareFull, funcSquareSide, funcSide) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (length > 0) {
        let radius = (length * Math.sqrt(lengthSqrt)) / 2
        let apothem = Math.sqrt((radius ** 2) + ((height *  Math.sqrt(heightSqrt)) ** 2))
        let perimeter = 4 * length * Math.sqrt(lengthSqrt) 

        let volume = ((length * Math.sqrt(lengthSqrt)) ** 2) * (height * Math.sqrt(heightSqrt)) / 3
        let squareSide = perimeter * apothem / 2
        let squareFull = ((length * Math.sqrt(lengthSqrt)) ** 2) + squareSide
        let side = Math.sqrt((((length * Math.sqrt(lengthSqrt)) / 2) ** 2) + (apothem ** 2))
        funcVolume(round100(volume))
        funcSquareFull(round100(squareFull))
        funcSquareSide(round100(squareSide))
        funcSide(round100(side))
    }
}