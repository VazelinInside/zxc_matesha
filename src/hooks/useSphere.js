export const UseSphere = (distance, radiusMini, distanceSqrt, radiusMiniSqrt, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (radiusMini > 0) {
        let radius = Math.sqrt((distance * Math.sqrt(distanceSqrt)) ** 2 + (radiusMini * Math.sqrt(radiusMiniSqrt)) ** 2)

        let volume = (radius ** 3) * (4 / 3)
        let squareFull = radius ** 2 * 4
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}