export const UsePyramidSecond = (side, angle, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
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