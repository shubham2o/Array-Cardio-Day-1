// console.table()
// EXAMPLE 1
console.log(`
_____1._____
`);

console.table([
    "Audi",
    "Volvo",
    "Ford",
    "BMW",
    "Mercedes",
    "Tesla"
]);


// EXAMPLE 2
console.log(`
_____2._____
`);

console.table({
    firstName: "Stephen",
    lastName: "Curry"
});


// EXAMPLE 3
console.log(`
_____3._____
`);

const car1 = {
    name: "Audi",
    model: "A4"
};

const car2 = {
    name: "Volvo",
    model: "XC90"
};

const car3 = {
    name: "Ford",
    model: "Fusion"
};

console.table([
    car1,
    car2,
    car3
]);


// EXAMPLE 4
console.log(`
_____4._____
`);

console.table([
    car1,
    car2,
    car3
], ["model"]);


// JavaScript - return
// EXAMPLE 5
console.log(`
_____5._____
`);

function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

var values = [0, 6, 8, 5];
values.sort(compare);
console.table(values);


// split() method 
// EXAMPLE 6
let text = "How are you doing today?"
const myArray = text.split(" ");

document.getElementById("demo").innerHTML = myArray;


// EXAMPLE 7
const myArray1 = text.split(" ", 3);

document.getElementById("demo1").innerHTML = myArray1;