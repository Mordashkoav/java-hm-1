let str='a b c d e'
console.log(str) // выводит a b c d e
let arrReverse=str.split(' ') //у reverse в ковычках ставим пробел, непонятно только делит ли он строку по каким-то другим признакам кроме пробела
console.log(arrReverse) // выводит ["a", "b", "c", "d", "e"]
arrReverse=arrReverse.reverse() //у reverse в ковычках ничего не ставим 
console.log(arrReverse) // выводит ["e", "d", "c", "b", "a"]
let strRvrs=arrReverse.join(' ') // у join в ковычках ставим что будет между элементами массива в строке(пробел, запятая и т.д.)
console.log(strRvrs) // выводит e d c b a
arrReverse=arrReverse.fill('xx', 3, 5) //заменил значения последних двух элементов массива
console.log(arrReverse)

let arrFill=[]
arrFill=arrFill.fill('xx', 0, 2) //заменил значения последних двух элементов массива
console.log(arrFill) // выводит пустой массив, нельзя заменить то, чего нет
arrFill.push('zzz', 'ccc')
console.log(arrFill) // выводит массив/ ok

arrReverse=arrReverse.concat(arrFill) // сложил два массива
console.log(arrReverse)

let letterС=arrReverse.includes('ccc') //возвращает true false 
console.log(letterС)

const arrObj1 = [{name: 'Alex', sex: 'man', age: 39}] // я так понял это массив с 1 элеменетом - объектом
console.log(arrObj1)

const arrObj2 = {name: 'Alex', sex: 'man', age: 39} // это объект с тремя свойствами ключ+значение
console.log(arrObj2)

console.log(arrObj1.name) // в массиве не находи ключ name в объекте
console.log(arrObj2.name) // нашел значение ключа name
console.log(arrObj2.age) // нашел значение ключа age
let res1=arrObj2.name
console.log(res1)

const arrObj3 = {name: 'Alex', name: 'Vita', age: 39} // это объект с тремя свойствами ключ+значение
console.log(arrObj3)

const arrObj4 = [
    {name: 'Alex', age: 39},
    {name: 'Vita', age: 38},
    {name: 'Anna', age: 14}, 
    {name: 'Vita', age: 8},
]
console.log(arrObj4)
console.log(arrObj4.find(el=>el.name==='Vita')) // нашел только один
console.log(arrObj4.findIndex(el=>el.name==='Vita')) // вывел только один номер элемента
arrObj4.forEach(el=>console.log(el))
arrObgMap=arrObj4.map(el=>el.age+'лет')
console.log(arrObgMap) // вывел массив без name, но добавил к возрасту "лет"

let strZap='a, b, c, d, e'
console.log(strZap)
let arrZap=str.split(',') //сплит работает только с пробелами? Можно массив создать разбив строку не по пробелам, а по другим символам??
console.log(arrZap)

let arrMap=[1, 2, 3, 4, 5]
let arrMapRtrn=arrMap.map(el=>el*2) // умножил все элементы массива на 2
console.log(arrMapRtrn)
let arrMapIdx=arrMap.map((el, ind) => el*ind) // умножил все элементы массива на свой индекс
console.log(arrMapIdx)
let arrMapClone=arrMap.map(el=>'тут будет массив') // заменил все элементы массива на текст
console.log(arrMapClone)


let arrEverySome=[-1, 3, -5, 20, 2] // задал массив
let arrEveryRes=arrEverySome.every(el=>el>0) // все ли больше нуля (Every) = нет
console.log(arrEveryRes)
let arrSomeRes=arrEverySome.some(el=>el>0) // есть ли больше нуля (Some)= да
console.log(arrSomeRes)
let summm=arrEverySome.reduce((sum, el)=>sum+el) // заводим новую переменную сумм к которой прибавляются все элементы массива
console.log(summm)
// let summm=arrEverySome.reduce((sum, el)=>if(el>0) {sum+el}) // c положительными не работает...?
// console.log(summm)

let arrFltr=[-1, 3, -5, 20, 2]
let arrFltrRes=arrFltr.filter(el=>el>0)
console.log(arrFltrRes)

