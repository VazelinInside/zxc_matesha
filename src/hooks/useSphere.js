export const UseSphere = (distance, radiusMini, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (radiusMini > 0) {
        let radius = Math.sqrt(distance ** 2 + radiusMini ** 2)

        let volume = radius ** 3 * 4 / 3
        let squareFull = radius ** 2 * 4
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}