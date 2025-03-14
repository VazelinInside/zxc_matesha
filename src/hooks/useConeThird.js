export const UseConeThird = (radius, radiusUnit, angle, funcVolume) => {

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
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = radius / Math.cos(radian) 
        let height = Math.sin(radian) * generatrix

        let volume =  (radius ** 2) * height / 3
        funcVolume(round100(volume) + 'П')
    }
}