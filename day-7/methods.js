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
