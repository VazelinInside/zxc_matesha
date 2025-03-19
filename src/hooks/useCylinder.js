export const UseCylinder = (diagonal, diametr, diagonalSqrt, diametrSqrt, funcVolume, funcSquare) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((diametr > 0) && (diagonal > diametr)) {
        let diagonal = diagonal * Math.sqrt(diagonalSqrt)
        let diametr = diametr * Math.sqrt(diametrSqrt)
        let height = Math.sqrt((diagonal ** 2) - (diametr ** 2))

        let volume = ((diametr / 2) ** 2) * height
        let square = 2 * (diametr / 2) * height + 2 * (diametr / 2) ** 2
        funcVolume(round100(volume) + 'π')
        funcSquare(round100(square) + 'π')
    }
}