export const UseConeSecond = (generatrix, generatrixSqrt, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    if (generatrix > 0) {
        let radian = (angle / 2) * Math.PI / 180
        let height = Math.sin(radian) * generatrix * Math.sqrt(generatrixSqrt)
        let radius = Math.sqrt(((generatrix * Math.sqrt(generatrixSqrt)) ** 2) - (height ** 2))
        let squareBase = (radius ** 2)

        let squareFull = radius * generatrix * Math.sqrt(generatrixSqrt) + squareBase
        funcSquareFull(round100(squareFull) + 'π')
    }
}