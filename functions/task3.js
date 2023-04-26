function getDivisors(number = 1) {
    if (number < 1 || !Number.isInteger(number)) {
        alert('number must be an integer and greater than zero!');
        return;
    }
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}
console.log(getDivisors(4));
console.log(getDivisors(5));
console.log(getDivisors(12));
console.log(getDivisors(30));