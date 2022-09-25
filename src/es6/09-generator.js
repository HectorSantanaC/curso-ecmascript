function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Héctor', 'Oscar', 'David', 'Ana', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);