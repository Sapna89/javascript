const numbers = [1, 10, 2, 3, 4];
const max = getMax([]);
console.log(max);

function getMax(array) {
    if (array.length === 0) 
        return undefined;
    return array.reduce((a, c) => (a > c) ? a : c);
}
