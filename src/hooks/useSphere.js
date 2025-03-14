export const UseSphere = (distance, radiusMini, distanceUnit, radiusMiniUnit, funcVolume, funcSquareFull) => {

    function round100(number, multitle) {
        return Math.round(number * 100) / 100
    }

    if (distanceUnit === 'м') {
        distance = distance * 100
    } else if (distanceUnit === 'дм') {
        distance = distance * 10
    } else if (distanceUnit === 'мм') {
        distance = distance / 10
    }
    if (radiusMiniUnit === 'м') {
        radiusMini = radiusMini * 100
    } else if (radiusMiniUnit === 'дм') {
        radiusMini = radiusMini * 10
    } else if (radiusMiniUnit === 'мм') {
        radiusMini = radiusMini / 10
    }
    
    if (radiusMini > 0) {
        let radius = Math.sqrt(distance ** 2 + radiusMini ** 2)

        let volume = radius ** 3 * 4 / 3
        let squareFull = radius ** 2 * 4
        funcVolume(round100(volume) + 'П')
        funcSquareFull(round100(squareFull) + 'П')
    }
}