export const UseTrunConeSecond = (radius, radiusUnit, height, heightUnit, angle, funcVolume, funcSquareFull) => {

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
    if (heightUnit === 'м') {
        height = height * 100
    } else if (heightUnit === 'дм') {
        height = height * 10
    } else if (heightUnit === 'мм') {
        height = height / 10
    }
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = height / Math.sin(radian) 
        let radiusMini = generatrix * Math.cos(radian)
        let radiusSecond = Number(radius) - radiusMini

        let volume = height * (radius ** 2 + radius * radiusSecond + radiusSecond ** 2) / 3
        let squareFull = (radius * generatrix + radiusSecond * generatrix + radius ** 2 + radiusSecond ** 2)
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}