function newUser(name, age, country) {
    var name = name || 'Héctor';
    var age = age || 38;
    var country = country || 'Spain';
    console.log(name, age, country);
}

newUser();
newUser('David', 21, 'Mexico');

function newAdmin(name = 'Héctor', age = 38, country = 'Spain') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'Perú');