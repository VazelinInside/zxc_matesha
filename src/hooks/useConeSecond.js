export const UseConeSecond = (generatrix, generatrixUnit, angle, funcSquareSide) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (generatrixUnit === 'м') {
        generatrix = generatrix * 100
    } else if (generatrixUnit === 'дм') {
        generatrix = generatrix * 10
    } else if (generatrixUnit === 'мм') {
        generatrix = generatrix / 10
    }
    
    if (generatrix > 0) {
        let radian = (angle / 2) * Math.PI / 180
        let height = Math.cos(radian) * generatrix
        let radius = Math.sqrt((generatrix ** 2) - (height ** 2))

        let squareSide = radius * generatrix
        funcSquareSide(round100(squareSide) + 'П')
    }
}