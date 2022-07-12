// Two things - end up with one value, persist the return or the outcome of iterating over elements in each subsequent iteration

const array = [1, 2, 3, 4, 5];

/* 
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.


Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

*/

const result = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(result);
