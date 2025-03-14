export const UseTrunCone = (radius, radiusUnit, radiusSecond, radiusSecondUnit, angle, funcVolume, funcSquareFull) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (radiusUnit === 'м') {
        radius = radius * 100
    } else if (radiusUnit === 'дм') {
        radius = radius * 10
    } else if (radiusUnit === 'мм') {
        radius = radius / 10
    }
    if (radiusSecondUnit === 'м') {
        radiusSecond = radiusSecond * 100
    } else if (radiusSecondUnit === 'дм') {
        radiusSecond = radiusSecond * 10
    } else if (radiusSecondUnit === 'мм') {
        radiusSecond = radiusSecond / 10
    }
    
    if ((radius > 0) && (radiusSecond > radius)) {
        let radian = angle * Math.PI / 180
        let generatrix = (radiusSecond - radius) / Math.cos(radian) 
        let height = Math.sin(radian) * generatrix

        let volume = height * (radius ** 2 + radius * radiusSecond + radiusSecond ** 2) / 3
        let squareFull = (radius * generatrix + radiusSecond * generatrix + radius ** 2 + radiusSecond ** 2)
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}