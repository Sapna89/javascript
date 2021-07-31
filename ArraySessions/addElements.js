const numbers = [3, 4];
//END
numbers.push(5, 6);

//Starting
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

// finding elements premitives
console.log(numbers.indexOf('1'));
//other methods
//lastIndexOf(1)
//includes(1)

//finding reference types
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

//this funtion is called as predicate or call back
const course = courses.find(function(course){
    return course.name === 'a';
});//similar to find we have findIndex

console.log(course);

//Similar to Java Lamda -> we have =>
//above code in line 26 can be rewritten as below
//arrow function
const course = courses.find(course => course.name === 'a');

//removing elements in an array
//pop() remove last element
//shift() remove first element
//splice(2,1) or splice(2,2) remove from middle

//how to remove all elements in array
//numbers =[] is not const
//numbers.length = 0; or
//numbers.splice(0, numbers.length); or
//loop it: numbers.pop()

// combining 2 arrays and slicing the array to two
let first =[1,2];
let second = [3,4];
let combined = first.concat(second);
// in ES6 we have spread ...
const combined1 = [...first, 'a', ...second, 'b'];
//let slice = combined.slice();
const copy = [...combined1];

//join(-)
//split(' ')
//URL slugs: if you check slack over flow the questions are included in the url without space and a -inbetween
//eg: https://stackoverflow.com/questions/42401198/program-to-find-largest-and-second-largest-number-in-array

// Sorting an Array
//sort()
//reverse()
//sorting objects

const coursesObj = [
    {id:1, name:'sapna', sal:100},
    {id:2, name:'naveen', sal:10},
    {id:3, name:'mimi', sal:1},
];
//arr.sort([compareFunction])
//compareFunction Optional
// Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
// firstEl
// The first element for comparison.
// secondEl
// The second element for comparison.
// If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.
coursesObj.sort(function(a,b){//refer ascii table
    if (a.name.toUpperCase < b.name.toUpperCase) return -1;
    else if (a.name.toUpperCase > b.name.toUpperCase) return 1;
    return 0;
});

console.log(coursesObj);
//output: 

const numb = [1,2,3,4];
numb.every(function(value){
    return value>=0;
});//checks if every element in the array matches the criteria

numb.some(function(value){
    return value>=0;
});//checks if atlest one element in the array matches the criteria