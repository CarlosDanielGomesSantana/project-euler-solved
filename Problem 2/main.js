/*
    Description:
    Each new term in the Fibonacci sequence is generated by adding the previous two terms.
    By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

let a_1 = 1;
let a_2 = 2;
let sum = a_2;

while (a_2 < 4*10**6) {
    let a_n = a_1 + a_2;
    a_1 = a_2;
    a_2 = a_n;
    if (a_n%2 == 0) {
        sum += a_n;
    }
}

console.log(sum);
