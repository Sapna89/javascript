// FIZZBIZZ Exercise: 
// divisible by 3 =>FIZZ
// divisible by 5 =>BUZZ
// divisible by both 3 & 5 => FIZZBUZZ
// not divisible by either => display Input
// for all other input types => NAN

export function fizzBuzz(number)
{
    if(number % 3 === 0 && number % 5 === 0)
        return 'FIZZBUZZ';

    if(number % 3 === 0 || number % 5 === 0)
        return number;

    if(number % 3 === 0)
        return 'FIZZ';
    
    if(number % 5 === 0)
        return 'BUZZ';
    
    return 'NAN';
}