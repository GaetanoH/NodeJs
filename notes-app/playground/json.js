// var obj  = {
//   name: 'Gaetano'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Gaetano", "age": 23}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title2',
  body: 'Some body'
};

var orignalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', orignalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title, note.body);
