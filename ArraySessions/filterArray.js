export function filterArr(numbers) {
   // const numbers = [0, -1, 3, -4, 5, 8];
    //debugger;
    const result = numbers.filter(value => value > 0)
                          .map(value => '<li>'+ value+'</li>')
                          .join(' ');
    
    
    return result;
}

