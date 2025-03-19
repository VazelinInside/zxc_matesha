export const UseTrunConeSecond = (radius, height, radiusSqrt, heightSqrt, angle, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = (height * Math.sqrt(heightSqrt)) / Math.sin(radian) 
        let radiusMini = generatrix * Math.cos(radian)
        let radiusTop = radius * Math.sqrt(radiusSqrt) - radiusMini

        let volume = height * Math.sqrt(heightSqrt) * ((radius * Math.sqrt(radiusSqrt)) ** 2 + radius * Math.sqrt(radiusSqrt) * radiusTop + radiusTop ** 2) / 3
        let squareFull = (radius * Math.sqrt(radiusSqrt) * generatrix + radiusTop * generatrix + (radius * Math.sqrt(radiusSqrt)) ** 2 + radiusTop ** 2)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}