export const UseCylinderSecond = (diagonalNum, diagonalSqrt, angle, funcSquareCut, funcVolume, funcSquareSide) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var diagonal = diagonalNum * Math.sqrt(diagonalSqrt)
    
    if (angle > 0 && diagonal > 0) {
        let radian = angle * Math.PI / 180
        let height = Math.round(diagonal * Math.sin(radian))
        let radius = Math.sqrt(diagonal ** 2 - height ** 2) / 2

        let volume = (radius ** 2) * height
        let squareSide = 2 * radius * height
        let squareCut = height * 2 * radius
        funcSquareCut(round100(squareCut))
        funcVolume(round100(volume) + 'π')
        funcSquareSide(round100(squareSide) + 'π')
    }
}