// Falsy values in Javascript
// undefined
// null
// ''
// false
// 0
// NaN



export function countTruthy(value){
    let count = 0;
    //debugger;
    for (let iterator of value) {
        if(iterator)
            count++
    }
    return count;
}