const numbers = [1, 2, 3, 4];
//debugger;
const callingFunct = includes(numbers, 4);


function includes(array, searchElement) {
    for (let key of array)
       if (key === searchElement)
            return true;
        return false;   
}

console.log(callingFunct);

//Note: do not use the below statement when you need to iterate. can be used for only one value not for bunch of values.
// return (key === searchElement) ? true : false;