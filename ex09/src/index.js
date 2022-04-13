const users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

function getUsers() {
    let output = "";
    for ( let i = 0; i < users.length; i++){
        output  += `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
}
return output;
}

function findUserById(id) {
try {
    var user = _.find(users, { 'id': id});

    let iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ˘
    ${user.gender}`;
    return iFindUser;}
    catch (error) {
        console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";
    }
}

getUsers();
console.log(getUsers());
module.exports = findUserById;



