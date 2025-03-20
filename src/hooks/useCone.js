export const UseCone = (generatrixNum, generatrixSqrt, heightNum, heightSqrt, funcVolume, funcSquareFull) => {

    function round100(number) {
        return Math.round(number * 100) / 100
    }

    var generatrix = generatrixNum * Math.sqrt(generatrixSqrt)
    var height = heightNum * Math.sqrt(heightSqrt)
    
    if ((height > 0) && (generatrix > height)) {  
        const radius = Math.sqrt((generatrix ** 2) - (height ** 2))

        const volume = (radius ** 2) * height / 3
        const squareFull = radius * (Number(generatrix) + radius)
        funcVolume(round100(volume) + 'π')
        funcSquareFull(round100(squareFull) + 'π')
    }
}