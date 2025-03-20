export const UseTrunConeSecond = (radiusNum, heightNum, radiusSqrt, heightSqrt, angle, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var radius = radiusNum * Math.sqrt(radiusSqrt)
    var height = heightNum * Math.sqrt(heightSqrt)
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = height / Math.sin(radian) 
        let radiusMini = generatrix * Math.cos(radian)
        let radiusTop = radius - radiusMini

        let volume = height * (radius ** 2 + radius * radiusTop + radiusTop ** 2) / 3
        let squareFull = (radius * generatrix + radiusTop * generatrix + radius ** 2 + radiusTop ** 2)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}