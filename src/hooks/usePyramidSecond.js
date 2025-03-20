export const UsePyramidSecond = (sideNum, sideSqrt, angle, funcVolume) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var side = sideNum * Math.sqrt(sideSqrt)
    
    if (side > 0) {
        let radian = angle * Math.PI / 180
        let height = side * Math.sin(radian)
        let radius = Math.sqrt(side ** 2 - height ** 2)
        let length = radius * Math.sqrt(3)
        let square = (length ** 2) * Math.sqrt(3) / 4

        let volume = square * height / 3
        funcVolume(round100(volume))
    }
}