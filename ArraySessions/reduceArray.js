export function reduceArr(numbers) {
    //let numbers = [0, -1, 3, -4, 5, 8];
    //debugger;
    const result = numbers.reduce(
        (sum, currentValue) => sum + currentValue
        );
    return result;   
}

//the above code is same as
//let sum =0;
//for(let n of numbers)
//sum += n;
//console.log(sum);

