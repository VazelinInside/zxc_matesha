export const UseConeSecond = (generatrix, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    if (generatrix > 0) {
        let radian = (angle / 2) * Math.PI / 180
        let height = Math.cos(radian) * generatrix
        let radius = Math.sqrt((generatrix ** 2) - (height ** 2))
        let squareTop = Math.PI * (radius ** 2)

        let squareFull = radius * generatrix + squareTop
        funcSquareFull(round100(squareFull) + 'П')
    }
}