// const numbers = [1,2,3,4,1,1];
// const output = except(numbers, [1,2]);
// console.log(output);

// function except(array, excludedArray) {
//     //simple way
//     // const outputArray = [];
//     // const removed = [];
//     // const array = [1,2,3,4,1,1];
//     // const excludedArray = [1,2];
//         array.filter((value, arr) => {
//             value !== 1;

//         });
//     // for (const keyIterator of excludedArray) {
//     //     for (const iterator of array) {
//     //         if (keyIterator === iterator)
//     //             array.pop(keyIterator);
               
//     //         //console.log(array);
//     //     }
//     // }
//    // console.log(array);
// }

const numbers = [1,2,3,4,1,1];
const excludedArray = [1,2,3,4];
let newArray = [];
//debugger;
for (const keyIterator of excludedArray) {
    if (newArray.length === 0)
        newArray = numbers.filter((value, index, arr) => {
            return value !== keyIterator;
        });
    else 
        newArray = newArray.filter((valueNew, indexNew, arrNew) => {
            return valueNew !== keyIterator;
        });
}
console.log(newArray);


//instructor Solution
// const output = [];
// for(let element of array)
//     if(!excludedArray.includes(element))
//         output.push(element);
// return output
