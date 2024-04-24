/*
    Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
*/

let sum_of_multiples = 0;

for (let n = 0; n < 1000; n++) {
    sum_of_multiples += (n%3 == 0 || n%5 == 0) ? n : 0
}

console.log(sum_of_multiples);
