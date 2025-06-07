export let users = [];

// add new user
export function newUser(fullName, age) {
  const user = {
    id: users.length + 1,
    fullName: fullName,
    age: age,
  };
  users.push(user);
}

// remove user
export function removeUser(id) {
  users = users.filter((user) => {
    console.log(`this user: ${JSON.stringify(user)}`);
    if (id === user.id) {
      return false;
    } else {
      return user;
    }
  });
}

newUser("Hazhar Ghaderi", 27);
newUser("Ehsan Safari", 27);
newUser("Siavash MohmmadJani", 15);

console.log(`users: ${JSON.stringify(users)}`);

removeUser(2);
console.log(`users: ${JSON.stringify(users)}`);
c