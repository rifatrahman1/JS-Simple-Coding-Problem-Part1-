// Task-3:
// Write a function to count the number of vowels in a string.

function checkVowel (vowels) {
    const vowel = 'aeiou';
    const mtString = new Set();
    for (const voweled of vowels) {
        if (vowel.includes(voweled.toLowerCase())) {
            mtString.add(voweled)
        }
    }
    return Array.from(mtString).join(',')
    // return mtString;
}

const vowelArray = 'a programmer turns coffee and code into solutions.';
const result = checkVowel(vowelArray);
console.log(result);