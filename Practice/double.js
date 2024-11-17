// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// function findNumber (numbers, find) {
//     const count = [];
//     for (const number of numbers) {
//         if (count.Set(number) === true) {
//             count.push(number)
//         }
//     }
//     return count
// }

// const numbers = [5,6,11,12,98, 5];
// const array = findNumber(numbers);
// console.log(array)


function findNumber(numbers, find) {
    const count = new Set();
    const double = [];
    for (const number of numbers) {
        if (count.has(number)) {
           double.length
        }
        else{
            count.add(number)
        }
    }
    return double;
}

const numbers = [5, 6, 11, 12, 98, 5];
const array = findNumber(numbers);
console.log(array)