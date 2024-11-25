// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
function range(start, end) {
    let result = []; // Initialize an empty array to store the range of numbers.
    for (let i = start; i <= end; i++) { // Loop from start to end, inclusive.
        result.push(i); // Add the current number (i) to the result array.
    }
    return result; // Return the array containing all the numbers in the range.
}

// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Write a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(numbers) {
    let total = 0; // Initialize a variable to keep track of the running total.
    for (let num of numbers) { // Loop through each number in the array.
        total += num; // Add the current number to the total.
    }
    return total; // Return the sum of the numbers in the array.
}
// Example output:
// console.log(sum(range(1, 10))); // returns 55

// 3. Write a function reverseArray that takes an array and returns a new array with reversed elements.
function reverseArray(array) {
    let reversed = []; // Initialize an empty array to store reversed elements.
    for (let i = array.length - 1; i >= 0; i--) { // Loop through the array from the last element to the first.
        reversed.push(array[i]); // Add each element to the reversed array.
    }
    return reversed; // Return the reversed array.
}
// Example output:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"]

// 4. Write a function reverseArrayInPlace that reverses the elements of the array in place (modifies original array).
function reverseArrayInPlace(array) {
    let left = 0; // Initialize a pointer to the first element of the array.
    let right = array.length - 1; // Initialize a pointer to the last element of the array.

    while (left < right) { // Continue swapping until pointers meet in the middle.
        let temp = array[left]; // Temporarily store the element at the left pointer.
        array[left] = array[right]; // Replace the left element with the right element.
        array[right] = temp; // Replace the right element with the temporarily stored value.

        // Move pointers towards the center.
        left++; // Move the left pointer one step to the right.
        right--; // Move the right pointer one step to the left.
    }
}
// Example:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
