// defining functions

// 1. function declaration 
function name() {
    console.log('sapna');    
}

// 2. Anonumous function expression
let names = function() {
    console.log('Anonumous sapna');   
};

let title = names;

//calling a function
title();
names();
name();

// Interview Questions
// what is hoisting in JS?
// if a function is defined using function declaration then that function can be called before its definition.
// eg: name();
// function name() {
//     console.log('sapna');    
// }

// But we cant do the same if we define the function using function expression
// we get reference error. 

// HOISTING in JAVASCRIPT is: The process of moving function declarations to the top of the file by javascript engine that execute this code.

