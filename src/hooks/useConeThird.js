export const UseConeThird = (radius, angle, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if (radius > 0) {
        let radian = angle * Math.PI / 180
        let generatrix = radius / Math.cos(radian)

        let squareFull = Math.PI * (radius ** 2) + Math.PI * radius * generatrix
        funcSquareFull(round100(squareFull) + 'π')
    }
}