//With for loop

const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 3);
}

console.log(sum);


// using for of loop----------------------------


const numbers2 = [10, 4, 100, -5, 54, 2];
let sum2 = 0;

for (let num2 of numbers2) {
    sum += Math.pow(num, 3);
}
console.log(sum); // output: 1158411


//useing for each method

const numbers3 = [10, 4, 100, -5, 54, 2];
let sum3 = 0;

numbers3.forEach(num => {
    sum3 += Math.pow(num, 3);
});

console.log(sum3); // output: 1158411


//using reducer  -----------
const numbers4 = [10, 4, 100, -5, 54, 2];

const sum4 = numbers4.reduce((acc, num) => {
    return acc + Math.pow(num, 3);
}, 0);

console.log(sum4); // output: 1158411

