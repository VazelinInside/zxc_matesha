export const UseCylinder = (diagonal, diametr, funcVolume, funcSquare) => {

    function round100(number) {
        return Math.round(number * 100) / 100
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