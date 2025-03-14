export const UsePyramidSecond = (side, sideUnit, angle, funcVolume) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (sideUnit === 'м') {
        side = side * 100
    } else if (sideUnit === 'дм') {
        side = side * 10
    } else if (sideUnit === 'мм') {
        side = side / 10
    }
    
    if (side > 0) {
        let radian = angle * Math.PI / 180
        let radius = Math.cos(radian) * side
        let length = radius * Math.sqrt(3)
        let square = (length ** 2) * Math.sqrt(3) / 4
        let height = Math.sqrt(side ** 2 - radius ** 2)

        let volume = square * height / 3
        funcVolume(round100(volume))
    }
}