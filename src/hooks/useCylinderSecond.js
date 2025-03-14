export const UseCylinderSecond = (diagonal, diagonalUnit, angle, funcSquareCut, funcVolume, funcSquareSide) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (diagonalUnit === 'м') {
        diagonal = diagonal * 100
    } else if (diagonalUnit === 'дм') {
        diagonal = diagonal * 10
    } else if (diagonalUnit === 'мм') {
        diagonal = diagonal / 10
    }
    
    if (diagonal > 0) {
        let radian = angle * Math.PI / 180
        let height = Math.round(diagonal * Math.sin(radian))
        let radius = Math.sqrt((diagonal ** 2) - (height ** 2)) / 2

        let volume = (radius ** 2) * height
        let squareSide = 2 * radius * height
        let squareCut = height * 2 * radius
        funcSquareCut(round100(squareCut))
        funcVolume(round100(volume) + 'П')
        funcSquareSide(round100(squareSide) + 'П')
    }
}