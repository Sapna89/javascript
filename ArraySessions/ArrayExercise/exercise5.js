const numbers =[1,2,1,3,4,5,6,3,6,4,5,3,5,3,2,1,2,1];
const count = countOccurrences(numbers, 1);
console.log(count);
function countOccurrences(array, searchElement) {
    //Simple method
    let occurrences = 0;
    array.forEach(element => (element === searchElement) ? (occurrences += 1) : occurrences);
        
    //     { // am using forEach method here and he is using reduce
    //     if (element === searchElement)
    //         occurrences += 1;
    // });
    return occurrences;

}


