// a) Создать свою реализацию функции map для массивов

// Array.prototype.map = function(projectionFunction) {
//   // code here
// };

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

//основной массив
let num = [1, 9, 16]

// новый массив через MAP
let arrayMap = num.map(element=>Math.sqrt(element))
console.log(arrayMap)

// новый массив без MAP
let mewMapArray = function (array) {
    let newArray=[]
    for (i=0; i<array.length; i++) {
        newArray[i]=Math.sqrt(array[i]);
        
    }
    return newArray
}

let arrayBezMap = mewMapArray(num)
console.log(arrayBezMap)


// let num = [1, 9, 16]
// let aaa = function () {
//     Math.sqrt
// }

// let mewMapArray = function (array, func) {
//     let newArray=[]
//     for (i=0; i<array.length; i++) {
//         newArray[i]=func(array[i]);
        
//     }
//     return newArray
// }

// let arrayBezMap = mewMapArray(num, aaa)
// console.log(arrayBezMap)
// let mewMapArray = func(array, funct) {
//     array.forEach(element => funct(array.element))

// }

