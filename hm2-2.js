let a=true+false
console.log(`true+false выводит значение 1+0=${a}`)
console.log(`12/"6" выводит 12/6 так как знак / приводит "6" к цифровому 6=${12/'6'}`)
console.log(`'number'+15+3 выводит строка+15+3=строка15+3=строка153=${'number'+15+3}`)
console.log(`15+3+'number' выводит 15+3+строка=18+строка=18number=${15+3+'number'}`)
console.log(`[1]>null=выводит массив = 1 и сравнивается с null, который приведен к 0, что есть правда так как 1>0=${[1] > null}`)
console.log(`"foo" + + "bar" foo + пустая строка (NaN) NaN+все остальное=NaN (равно строка+число=строка)+строка 'bar'=${"foo"+ +"bar"}`) //возможно ошибаюсь
console.log(`'true' == true. 'true' строка не равна логическому выражению true=${'true'==true}`)
console.log(`false=='false'. 'false' строка не равна логическому выражению false=${false=='false'}`)
// console.log(`null == '=${null=='}`) // не выводит ответ, выдает ошибку видимо из-за ковычек
console.log(`!!"false" == !!"true"=${!!"false"==!!"true"}`) //не понимаю
console.log(`['x'] == 'x' = обе стороны приводятся к "х" =${['x']=='x'}`) //
console.log(`[] + null + 1=${[]+null+1}`)//не понимаю
console.log(`0||'0'&&{}=${0||'0'&&{}}`)//не понимаю
console.log(`[1,2,3] == [1,2,3]=${[1,2,3]==[1,2,3]}`)//не понимаю

// let i=3
// while(i) {
//     alert(i--)
// }
// while(i) это сокращенная запись while (i != 0) то есть выполняется пока i не равно 0

let b=40
while(b<92) {
    console.log(b)
    b++
}

let c=11
while (c<341)
{
    if (c%4==0) {console.log(c)}
    c++
}

for (let d=100; d>-6; d--) {
    console.log(d)
}

let arrSix=[1, 6, 8, 14, 0, 4]
for (let e=0; e<arrSix.length; e++)
{
    if (arrSix[e]<10&&arrSix[e]>3) {console.log(arrSix[e])}
}

let arrSeven=[1, 2, 3, 4, 5, 6, 7, 8, 9]
let f1="'"
for(let f2=0; f2<arrSeven.length; f2++) {f1=f1+'-'+arrSeven[f2]}
console.log(`${f1}-'`)

let arrEight=['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение']
for(let g=0; g<arrEight.length; g++) {
    if(arrEight[g]=='суббота'||arrEight[g]=='воскресение') {
        console.log (arrEight[g].bold())
    } 
    else{
        console.log (arrEight[g])
    }
}

let arrNine=['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение']
let today='суббота'
for(let j=0; j<arrNine.length; j++) {
    if (arrNine[j]==today) {
        console.log(arrNine[j].italics())
    } else {
        console.log(arrNine[j])
    }
} 

let n=1000
let num=0
//первое решение
// while(n>50) {
//     n=n/2
//     num++
// }

//второе решение
// for(n; n>50; num++) {
//     n=n/2
// }

//третье решение
for(n; n>50; n=n/2) {
    num++
}
console.log(`количество делений=${num}, результат деления=${n}`)
