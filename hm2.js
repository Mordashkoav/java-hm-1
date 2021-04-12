// домашка 4

// Создать объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - 1-й и т.д.). Вывести текущий день недели.

// let objWeek = {
//     1: 'понедельник',
//     2: 'вторник',
//     3: 'среда',
//     4: 'четверг',
//     5: 'пятница',
//     6: 'суббота',
//     7: 'воскресение',
// }
// let today = new Date()
// let res = today.getDay()
// if (res==0) {
//     console.log(objWeek[7])
// }
// else {
//     console.log(objWeek[today.getDate()])
// }
// Напишите функцию, которая принимает объект а  возвращает вложенный массив вида [[key, value], [key, value]]
// let obj5 = {
//     name: 'Alex',
//     age: 39,
//     sex: 'man',
// }
// let arrObj5=[]

// //без функции
// for (let [key, value] of Object.entries(obj5)) {
//     arrObj5.push([key, value])
// }
// функция: (не работает)
// const objIntoArr = (Object) => {
//     for (let [key, value] of Object.entries(obj5)) {
//         arrObj5.push([key, value])
// }
// arrObj5=objIntoArr(obj5)

// console.log(arrObj5)

// Напишите функцию isPlainObject, которая проверяет, является ли элемент именно объектом, а не массивом, null и т.п.

// let isPlainObject = (v) => Array.isArray(v)===
// let plain = []

// Напишите функцию, которая возвращает новый объект без указанных значений.Т.е в качестве параметров функции вы указываете свойства объекта и на выходе вы получите объект без этих свойств.
let obj6 = {name: 'Alex', age: 39}
let funcNoItems = (object, key) => {
    delete object.key
}
funcNoItems(obj6)
console.log(obj6)

// Напишите функцию, которая сравнивает два объекта по значениям.



// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.



// Разобраться что такое  new Date() в js.

 let today = new Date()
 let addZero = (date) => {
    if (date > 0  && date < 10) {date = '0' + date} //почему не работает функция?
    }
//  console.log(`сегодня ${today.getFullYear()}/${addZero(today.getMonth()+1)}/${today.getDate()}`)
console.log(`сегодня ${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`)