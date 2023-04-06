const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue){
    return accumulator + currentValue;
}, 0);

// Short version
const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

// Using a for loop
const sum3 = () => {
    let accumulator = 0;
    for (const currentValue of numbers) {
        accumulator += currentValue;
    }
    return accumulator;
};

console.log(sum3());


//
const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 230},
    {id: 3, name: 'Product 3', price: 165},
    {id: 4, name: 'Product 4', price: 72}
];

const total = cart.reduce(function (accumulator, product) {
    return accumulator + product.price
}, 0);

console.log(total);