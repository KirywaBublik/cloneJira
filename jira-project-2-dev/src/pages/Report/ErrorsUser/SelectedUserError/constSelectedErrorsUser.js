export const selectedErrorsUser = {
    dashArray: 1194, // Ширина кольца
    degMin: 49.5, // Минимальное кол-во градусов
    degMax: 202, // Максимальное кол-во градусов
    percentBottomNumber: 40, // Числа ошибок
}
selectedErrorsUser.percentTopNumber = 100 - selectedErrorsUser.percentBottomNumber
selectedErrorsUser.dynamicDegMin = selectedErrorsUser.degMin - ((selectedErrorsUser.degMax - selectedErrorsUser.degMin) * (selectedErrorsUser.percentBottomNumber / 100));