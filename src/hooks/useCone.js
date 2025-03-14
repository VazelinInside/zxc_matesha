export const UseCone = (generatrix, generatrixUnit, height, heightUnit, funcVolume, funcSquareFull) => {

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
    if (heightUnit === 'м') {
        height = height * 100
    } else if (heightUnit === 'дм') {
        height = height * 10
    } else if (heightUnit === 'мм') {
        height = height / 10
    }
    
    if ((height > 0) && (generatrix > height)) {
        let radius = Math.sqrt((generatrix ** 2) - (height ** 2))

        let volume = (radius ** 2) * height / 3
        let squareFull = radius * (Number(generatrix) + radius)
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}