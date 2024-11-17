
// 1 way

// function inchToFeet (inch) {
//     const feet = inch / 12;
//     return feet;
// }

// const rifatHeight = inchToFeet(69);
// console.log(rifatHeight);


// 2 way

function inchToFeet (inch) {
    const feet = inch / 12;
    const parseFeet = parseInt(feet);
    const moduleFeet = inch % 12;
    const result = parseFeet + ` ft ` + moduleFeet + ` inch `;
    return result;
}

const rifatHeight = inchToFeet(75);
console.log(rifatHeight);


// mile to kilometer

function mileToKilo (mile) {
    const kilo = mile * 1.609344;
    return kilo;
}

const kilo = mileToKilo(5);
console.log(kilo);
