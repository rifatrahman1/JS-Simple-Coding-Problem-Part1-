

function leepYear (year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    return false;
}

const isLeep = leepYear (2031)
console.log(isLeep);