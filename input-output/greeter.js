let rlSync = require('readline-sync');

let firstName = rlSync.question('What is you name? ');
let lastName = rlSync.question('What is you last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);