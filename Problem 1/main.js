/*
    Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Find the sum of all the multiples of 3 or 5 below 1000.
*/

let multiples_of_3_and_5 = [];
for (let n = 0; n < 1000; n++) {
    if (n%3 == 0 || n%5 == 0) {
        multiples_of_3_and_5.push(n);
    }
}

let sum_of_multiples = 0;
for (const n of multiples_of_3_and_5) {
    sum_of_multiples += n;
}

console.log(sum_of_multiples);
