/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.
Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.
Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.
*/

const getDiet = (arr, limitCalories) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > limitCalories) {
            return i
        }
    }
    return arr.length

    //reduce - здесь надо думать , тут неправильно
    //     return arr.reduce(function (acc, cur, index, array) {
    //         acc += cur
    //         if (acc > limitCalories) {
    //             console.log(index);
    //             return index
    //         }
    //         return acc
    //     }, 0)
}

console.log(getDiet([10, 20, 30, 40, 90], 100));