export const UseConeThird = (radiusNum, radiusSqrt, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var radius = radiusNum * Math.sqrt(radiusSqrt)
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = radius / Math.cos(radian)

        let squareFull = (radius ** 2) + radius * generatrix
        funcSquareFull(round100(squareFull) + 'π')
    }
}