// function add(a, b) {
//     return a + b;
// }
// // const result = add( a:1, b:2);
// //
// // console.log(result);
//
//
// //wyrażenie funkcyjne
// const add1 = function (a, b){
//     return a + b;
// }
// // console.log(add1(1, 2));
//
// const add2 = (a, b) => {
//     return a + b;
//
// }
// // console.log(add2(2, 3));

//funkcja która mówi czy jest ciepło
//
// function checkWeather(temp){
//     if (temp < 20){
//         return 'zimno';
//     }
//     return 'ciepło'
// }
//
// console.log(checkWeather(18));
//

// zwróć najwyższą liczbę

const max = (digits) => {
    let result = digits[0];

    for (let i = 0; i < digits.length; i++) {
        if (result < digits[i]) {
            result = digits[i];
        }
    }
    return result
}

max([1, 2, 3, 4, -5, 33]);

