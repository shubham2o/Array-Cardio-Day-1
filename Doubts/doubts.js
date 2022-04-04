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