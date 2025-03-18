export const UseCone = (generatrix, height, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((height > 0) && (generatrix > height)) {
        let radius = Math.sqrt((generatrix ** 2) - (height ** 2))

        let volume = (radius ** 2) * height / 3
        let squareFull = radius * (Number(generatrix) + radius)
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}