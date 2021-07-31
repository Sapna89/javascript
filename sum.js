export function sum(limit){
    //debugger;
    let sumOfMultiples = 0;
    for (let i = 1; i <= limit; i++){
        if(i % 3 === 0 && i % 5 ===0){
            sumOfMultiples += i;
            continue;
        }
        if(i % 3 === 0 || i % 5 ===0)
            sumOfMultiples += i;
    }
    return sumOfMultiples;
}