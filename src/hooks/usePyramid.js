export const UsePyramid = (length, height, funcVolume, funcSquareFull, funcSquareSide, funcSide) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (length > 0) {
        let radius = Math.sqrt(2 * (length / 2) ** 2) 
        let apothem = Math.sqrt((radius ** 2) + ((length / 2) ** 2))
        let perimeter = 4 * length

        let volume = (length ** 2) * height / 3
        let squareSide = perimeter * apothem / 2
        let squareFull = (length ** 2) + squareSide
        let side = Math.sqrt((height ** 2) + (radius ** 2))
        funcVolume(round100(volume))
        funcSquareFull(round100(squareFull))
        funcSquareSide(round100(squareSide))
        funcSide(round100(side))
    }
}