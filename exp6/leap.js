function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a Leap Year!";
    } else {
        return year + " is NOT a Leap Year!";
    }
}

// Example usage:
let year = prompt("Enter a year:");
alert(checkLeapYear(parseInt(year)));
