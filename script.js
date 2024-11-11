// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
function sum(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
// console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
// Example
//console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];

}
// Example output for reverseArrayInPlace:
// swaps elements from beginning to end in the array and moves them towards the center allowing us to swap the elements efficiently. Previously I used shift, unshift, push,
// and pop but did not meet critera for in place approach
function reverseArrayInPlace(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        // Move towards the center
        left++;
        right--;
    }
}
//Ex:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]


