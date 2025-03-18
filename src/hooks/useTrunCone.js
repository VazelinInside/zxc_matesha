export const UseTrunCone = (radius, radiusSecond, angle, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((radius > 0) && (radiusSecond > radius)) {
        let radian = angle * Math.PI / 180
        let generatrix = (radiusSecond - radius) / Math.cos(radian) 
        let height = Math.sin(radian) * generatrix

        let volume = height * (radius ** 2 + radius * radiusSecond + radiusSecond ** 2) / 3
        let squareFull = (radius * generatrix + radiusSecond * generatrix + radius ** 2 + radiusSecond ** 2)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}