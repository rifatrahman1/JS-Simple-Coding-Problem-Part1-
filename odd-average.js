

function oddAverage(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    }
    const length = numbers.length;
    const result = sum / length;
    return result
}

const numbers = [23, 556, 55, 6, 467, 233, 78];
const avg = oddAverage(numbers);
console.log(`average the odd number`, avg);


function evenAverage(numbers) {
    let sum = 0;
    let even = [];
    
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number)
            sum = sum + number;
        }
    }
    const length = numbers.length;
    const result = sum / length;
    return result;
}

const numbers1 = [23, 556, 55, 6, 467, 233, 78];
const evenAvg = evenAverage(numbers1);
console.log(`average the even number`, evenAvg)