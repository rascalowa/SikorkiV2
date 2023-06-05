const fs = require('fs');

// Writing to the file
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// Reading from data
// const dataBuffer = fs.readFileSync('1-json.json'); // binary data
// const dataJSON = dataBuffer.toString(); // string again
// const data = JSON.parse(dataJSON);  // JSON format again


const readDataBuffer = fs.readFileSync('1-json.json');
const readDataString = readDataBuffer.toString();
const user = JSON.parse(readDataString);

user.name = "Monchee";
user.age = 32;

const userString = JSON.stringify(user);
fs.writeFileSync('1-json.json', userString);

console.log(user);