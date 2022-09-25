const user = {
    username: 'Hector',
    age: 38,
    country: 'Spain'
}
const {username, ...values} = user;
console.log(username);
console.log(values);