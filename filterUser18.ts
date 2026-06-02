const users = [
    { name: "Afiq", age: 25 },
    { name: "Ali", age: 17 },
    { name: "John", age: 30 }
];

function filter18(users : any []) {

    users = users.filter((user) => user.age >= 18);
    return users;
}

console.log(filter18(users))