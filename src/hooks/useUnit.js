export const UseUnit = (number, unit, funcResultNumber) => {

    switch (unit) {
        case 'м':
            number = number * 100;
            break;
        case 'дм':
            number = number * 10;
            break;
        case 'см':
            number = number;
            break;
        case 'мм':
            number = number / 10;
            break;
    }

    funcResultNumber(number)
}