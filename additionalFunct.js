
export function isLandscape(width, height) {
    return (width > height) ? 'Landscape' : 'Not Landscape';
} 


//Note
//return (width > height) ? true : false; this is same as below line
//return (width > height); //only when returning true or false case
// =================================
// shortcut for commentting the code ctrl+k+c - ctrl+k+u for uncommentting the code


export function maxNumber(x,y){
    // if(x > y)
    //     console.log(x);
    // else if (y > x) {
    //     console.log(y)
    // } else {
    //     console.log('Please check your number')
    // }

    return (x > y) ? x : y;
}