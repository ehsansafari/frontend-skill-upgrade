import { users, newUser, removeUser } from "./methods.js";

newUser("Hazhar Ghaderi", 27); // append to users
newUser("Ehsan Safari", 27);
newUser("Siavash MohmmadJani", 15);

console.log(`users: ${JSON.stringify(users)}`);

removeUser(2);
console.log(`users: ${JSON.stringify(users)}`);
