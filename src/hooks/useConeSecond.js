export const UseConeSecond = (generatrixNum, generatrixSqrt, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var generatrix = generatrixNum * Math.sqrt(generatrixSqrt)

    if (generatrix > 0) {
        let radian = (angle / 2) * Math.PI / 180
        let radius = Math.sin(radian) * generatrix
        let squareBase = (radius ** 2)

        let squareFull = radius * generatrix + squareBase
        funcSquareFull(round100(squareFull) + 'π')
    }
}