const array = [1, 2, 3, 4];
const output = move(array, 1, -1);

console.log(output);

function move(array, index, offset) {
    const outputArray = [...array];
    const temporaryArray = outputArray.splice(index, 1);
    const position = offset+index;
    
    if (position >= array.length || position < 0){//I used offset here and instructor used offset+index
        console.error('invalid offset');
        return;
    }      
    temporaryArray.forEach(value => outputArray.splice(position, 0, value));//here instead of passing (offset, 0, value) he is passing (offset +index, 0, value)
    return outputArray;
}

//let outputArray = [];

// array.splice(2, 0, 'a');
// console.log(array);

//method one
//============
// if (offset === null || offset > array.length)
//     console.error('invalid offset');
// else {
//     for (const element of array) {
//         // debugger;
//          if (array.indexOf(element) !== index)
//              outputArray.push(element);
//      }
     
//     if (array.length !== outputArray.length) {
//          for (const item of array) {
//              if (array.indexOf(item) === index)
//                  outputArray.splice(offset, 0, item);
//          }
//     } 
// }
 
// console.log(outputArray);

//method two
//==========








