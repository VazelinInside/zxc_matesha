export const UseSphere = (distanceNum, radiusMiniNum, distanceSqrt, radiusMiniSqrt, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var distance = distanceNum * Math.sqrt(distanceSqrt)
    var radiusMini = radiusMiniNum * Math.sqrt(radiusMiniSqrt)
    
    if (radiusMini > 0) {
        let radius = Math.sqrt(distance ** 2 + radiusMini ** 2)

        let volume = (radius ** 3) * (4 / 3)
        let squareFull = radius ** 2 * 4
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}