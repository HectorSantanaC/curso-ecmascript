// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring
let user = {userName: 'Héctor', age: 38};
let {userName, age} = user;
console.log(userName, user.age);

// spread operator
let person = {name: 'Héctor', age: 38};
let country = 'Spain';

let data = {id: 1, ...person, country};
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1, 1, 2, 3);