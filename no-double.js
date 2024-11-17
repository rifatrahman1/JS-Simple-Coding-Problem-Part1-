

const name = ['nafiz', 'rahmatullah', 'nafiz', 'rifat', 'sany', 'rifat', 'rahmatullah', 'fahim'];

function noDouble(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDouble(name);
console.log(uniqueArray);


const numbers = [43, 67, 8, 12, 34, 89, 234, 89, 234, 8, 78, 43];

function noDouble1(numbers) {
    const addArray = [];
    for (const number of numbers) {
        if (addArray.includes(number) === false) {
            addArray.push(number);
        }
    }
    return addArray;
}

const numberArray = noDouble1(numbers);
console.log(numberArray)