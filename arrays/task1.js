const getSumOfSequence = (number) => {
    if (!Number.isInteger(number) || number < 1) {
        alert("Number must be a positive integer!");
        return;
    }

    const sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }

    return sequence[0] + sequence[sequence.length - 1];
}

console.log(getSumOfSequence(5));
console.log(getSumOfSequence(10));

