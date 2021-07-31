// // arguments is the arguments passes to a function while calling. this argument is an Object and an iterator too so we can use forof loop to iterate it.
// // example:

// // function sum() {
// //     let total = 0;
// //     console.log(arguments);
// //     for (let value of arguments)
// //         total += value;
// //     return total;
// // }

// // console.log(sum(1,2,4,6,7,1,34,1));

// // we can acheive the above using the rest operator. 
// // the ...(3 dots) returns an Array. 
// // if you remember we use this ... as spread operator in array 
// // which basically copy all the items in the array and paste it in the new array
// // eg: const array1 = [1,2,3,4,5,6,7,8,9];
// // const array2= [...array1];
// // console.log(array1, array2);

// // NOTE: Function parameters are the names listed in the function's definition.
// // Function arguments are the real values passed to the function.
// // Rest Operator(...) Similarly even in arguments it copy all the arguments passed to the function and paste/pass it as an array in the parameters. 
// // Syntax: function name(...args){} // rest operator has to be the last parameter being passed on a function else it throws Syntax Error.
// // Example1: 
// // function sum1(...args) {    
// //     console.log(args);
// //     return args.reduce((a, b) => a + b);
// // }

// // console.log(sum1(1,2,4,6,7,1,34,1));

// //Example2:
// //Function to calculate the total price in a shopping cart with discount applied.
// // Note: if you use a Rest operator, it has to be the last parameter of the function.

// function total(discount, ...price) {
//     return price.reduce((a, b) => a + b) * (100 - discount)/100;
     
// }

// console.log(total(12,1,2,4,6,7,1,34,1));


// Default Parameter in ES6.
// NOTE: make sure the default parameter is the last parameter in the function 
// OR make sure to assign the default value for the rest of the parameters after that default parameter assignment.
function interest(principle, year = 5, rate = 3.2 ) {
    return principle * (rate/100) * year;
} 

const yearlyInterest = interest(300000, 30);
console.log(yearlyInterest, 'monthly interest is: ', yearlyInterest/12);
