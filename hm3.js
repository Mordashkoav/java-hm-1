// домашка 3

// Задача 1.Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
arrA=arrA.concat(arrB)
console.log(arrA)

// Задача 2.Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arrC=['a', 'b', 'c']
arrC.push(1, 2, 3)
console.log(arrC)

// Задача 3.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arrD=[1, 2, 3]
arrD.reverse()
console.log(arrD)

// Задача 4.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Задача 5.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arrE=[1, 2, 3, 4, 5]
arrF=arrE.slice(0,3) //вывел с нолевого по третий не включительно
console.log(arrF)
arrG=arrE.slice(3,5) // вывел с первого по пятый не включительно
console.log(arrG)


//Задача 6.Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let helloObj = {js: 'test', jq: 'hello', css: 'world'}
console.log(helloObj) 
let arrHelloObg =Object.keys(helloObj)
console.log(arrHelloObg)

// Задача 7.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let arrRvrs=[1, 2, 3, 4, 5]
let arrNoRvrs=[]
while(arrRvrs.length>0) {
    let i=arrRvrs.pop()
    arrNoRvrs.push(i)
}
console.log(arrNoRvrs)

// Задача 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arrRed=[[1, 2, 3], [4, 5], [6]]
arrRed=arrRed.flat()
let sumRed=arrRed.reduce((sum, el)=>sum+el)
console.log(`сумма чисел массива = ${sumRed}`)

// Второй вариант, на случай если это не для способа reduce
let arrRed=[[1, 2, 3], [4, 5], [6]]
arrRed=arrRed.flat()
let sumRed = 0
while(arrRed.length>0) {
     sumRed+=arrRed.shift()
}
console.log(`сумма чисел массива = ${sumRed}`)

// Задача 9.Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arrRedThr=[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
arrRedThr=arrRedThr.flat().flat()
let sumRedThr=arrRedThr.reduce((sum, el)=>sum+el)
console.log(`сумма чисел трехмерного массива = ${sumRedThr}`)

// Задача 10.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
let arr1=[1, 2, 3]
let arr2=[1, 2, 3]
let arrEqual=(a, b)=>a.join===b.join
if (arr1.length=arr2.length) {console.log(arrEqual(arr1, arr2))}

// Задача 11.Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел(используйте map).
let arr3=[1, 2, 3]
let arr4=arr3.map(el=>el*el)
console.log(arr4)

// Задача 12.Дан массив с числами. Оставьте в нем только отрицательные числа.(filter).
let arr5=[-1, 3, 5, -13, -8, 9]
let arr6=arr5.filter(el=>el<0)
console.log(arr6)

// Задача 13.Дан массив с числами. Найдите сумму этих чисел.(reduce).
let arr7=[1, 4, 5, -5, -8, 8]
let resRdc=arr7.reduce((sum, el)=>sum+el)
console.log(resRdc)
