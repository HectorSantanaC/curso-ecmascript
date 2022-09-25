// enahced object literals
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Héctor', 38, 'Spain', 1));