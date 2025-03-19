export const UseConeThird = (radius, radiusSqrt, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = (radius * Math.sqrt(radiusSqrt)) / Math.cos(radian)

        let squareFull = ((radius * Math.sqrt(radiusSqrt)) ** 2) + radius * Math.sqrt(radiusSqrt) * generatrix
        funcSquareFull(round100(squareFull) + 'π')
    }
}