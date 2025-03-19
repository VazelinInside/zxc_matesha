export const UseCone = (generatrix, generatrixSqrt, height, heightSqrt, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }
    
    if ((height > 0) && (generatrix > height)) {
        let generatrix = generatrix * Math.sqrt(generatrixSqrt)
        let height = height * Math.sqrt(heightSqrt)
        
        let radius = Math.sqrt((generatrix ** 2) - (height ** 2))

        let volume = (radius ** 2) * height / 3
        let squareFull = radius * (Number(generatrix) + radius)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}