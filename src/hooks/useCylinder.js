export const UseCylinder = (diagonal, diagonalUnit, diametr, diametrUnit, funcVolume, funcSquare) => {

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
    if (diametrUnit === 'м') {
        diametr = diametr * 100
    } else if (diametrUnit === 'дм') {
        diametr = diametr * 10
    } else if (diametrUnit === 'мм') {
        diametr = diametr / 10
    }
    
    if ((diametr > 0) && (diagonal > diametr)) {
        let height = Math.sqrt((diagonal ** 2) - (diametr ** 2))

        let volume = ((diametr / 2) ** 2) * height
        let square = 2 * (diametr / 2) * height + 2 * Math.PI * (diametr / 2) ** 2
        funcVolume(round100(volume) + 'П')
        funcSquare(round100(square) + 'П')
        console.log(diagonal, diametr, height, volume, square)
    }
}