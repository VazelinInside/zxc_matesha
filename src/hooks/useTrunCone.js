export const UseTrunCone = (radius, radiusSecond, radiusSqrt, radiusSecondSqrt, angle, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((radius > 0) && (radiusSecond > radius)) {
        let radian = angle * Math.PI / 180
        let generatrix = (radiusSecond * Math.sqrt(radiusSecondSqrt) - radius * Math.sqrt(radiusSqrt)) / Math.cos(radian) 
        let height = Math.sin(radian) * generatrix

        let volume = height * ((radius * Math.sqrt(radiusSqrt)) ** 2 + radius * Math.sqrt(radiusSqrt) * radiusSecond * Math.sqrt(radiusSecondSqrt) + (radiusSecond * Math.sqrt(radiusSecondSqrt)) ** 2) / 3
        let squareFull = (radius * Math.sqrt(radiusSqrt) * generatrix + radiusSecond * Math.sqrt(radiusSecondSqrt) * generatrix + (radius * Math.sqrt(radiusSqrt)) ** 2 + (radiusSecond * Math.sqrt(radiusSecondSqrt)) ** 2)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}