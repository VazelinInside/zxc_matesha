export const UseSphereSecond = (distanceNum, radiusNum, distanceSqrt, radiusSqrt, funcSquareSecant) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var distance = distanceNum * Math.sqrt(distanceSqrt)
    var radius = radiusNum * Math.sqrt(radiusSqrt)
    
    if (radius > 0) {
        let radiusMini = Math.sqrt(radius ** 2 - distance ** 2)

        let squareSecant = radiusMini ** 2
        funcSquareSecant(round100(squareSecant) + 'π')
    }
}