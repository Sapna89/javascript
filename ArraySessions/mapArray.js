export function mapArr(numbers) {
    //debugger;

//Example of map to a string: html element <li></li>
    // const result = numbers.filter(value => value > 0)
    //                         .map(value => '<li>'+value+'</li>')
    //                         .join('');

//Example of map to an Object
    const result = numbers.filter(value => value > 0)
                            .map(value => ({ value: value }) //this line here is same as below block of code and when we have objects in one line then we put the object block of code inside ()
                            //const obj = { 
                             //   value: value
                           // };
                           // return obj;//Note: in a single line of code, callback function will return automatically but otherwise we need to return the value explicitly
                        //}
                                );


    return result;
}