let users = [];
console.log(`users: ${users}`);

function newUser(fullName) {
  users.push(fullName);
}

newUser("Hazhar Ghaderi"); // append to users
newUser("Ehsan Safari");

console.log(`users: ${users}`);
