//Objects are collection of key value pairs
//properties which are highly related can be encapsulated in objects

//Object Oriented Programming
//encapsulation
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();// Draw method of circle object

// instead of having multiple objects just for different values 
// we can create factory functions and constructors
//Factory Function for the above Object circle
function createCircle(radius) { //, location, isVisible) {
    return {
        radius, //is same as radius: radius
      //  location: location,
      //  isVisible: isVisible,
        draw() { //is same as  draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);


//Constructor Function for creating object
//pascal notation: OneTwoThree
//camel notation: oneTwoThree

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);


//===========================
//Objects in JS are dynamic: we can add new property also delete property
const circle = { //we cant reassign this to a new object but can make changes in its property
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {};

delete circle.color;
delete circle.draw;

console.log(circle.radius);
//=================================
//Note: Constructor functions are Objects

function CircleNew(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
console.log(CircleNew.name, CircleNew.length, CircleNew.constructor)
const circle = new CircleNew(5);

//Note the constructor function above is same as below function declaration
const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);
const circle = new Circle1(1);
console.log(circle);

//==========================
//Methods available in methods: In JS functions are Objects
const circle1 = new Circle1(1); //is same as below
Circle1.call({}, 1);
Circle1.apply({}, [1,2,3]) // if we want to pass an array as argument

// Premitive data types/ value types
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference data types
// Object
// Function 
// Array //at some point arrays are also Objects

// Note: Primitives are copied by their value
// Objects are copied by their reference
//Example1: 
//Primitives
let x=10;
let y=x;
x=20;
console.log(x,y)//output: 20 10

//Objects
let xObj={value:10};
let yObj=xObj;
xObj.value = 20;
console.log(xObj,yObj)//output: {value = 20} {value = 20}

//Example2: 
//Primitives
let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);//output: 10

//Objects
let obj={value:10};
function increase(obj){
    obj++;
}

increase(obj);
console.log(obj);//output: {value = 11}

//======================
//Note: we cant use for-of loop for Objects, Objects are not iterrable
//If we want to do so, then we can use Object.keys(object) which returns an array
const abc = {
    val: 1,
    meth() {console.log('in meth function');}
};

for (let obj in abc)
    console.log(obj, circle[obj]);

for (let key of Object.keys(abc))
    console.log(key);

for (let entry of Object.entries(abc))
    console.log(entry);

if ('val' in abc) //to check is this property exist in this object abc
    console.log('yes');

//=======================
//cloning an Object
const abc1 = {
    val: 1,
    meth() {console.log('in meth function');}
};

//old style of clonning an object
const another = {};
for (let key in abc1)
    another[key] = circle[key];

//new way of clonning
const another1 = Object.assign({}, abc1);

//spread is another way of clonning, spread is ... (3 dots)
const another2 = { ...abc1 };
console.log(another, another1, another2);

//garbage collection
//we dont have any control over this

//build in Objects
//Math Object
//String is of 2 types --> string primitives and string Object
//Date

//Template Literals ``
//mainly useful if wa want to create any templet with variables dynamically passed
const name = 'sapna';
function emailBody(value){
    let msgBody;
    if (value === 'new'){
        msgBody = `Welcome ${name}!! We value your time
        and thanks for joining our team`;
    }
    if (value === 'old'){
        msgBody = `Hey ${name}!! We value your time
        and thanks for being in our team`;
    }

    return 
}
const msg = 
`Hi ${name},

${emailBody}

Regards,
Team`;



 


