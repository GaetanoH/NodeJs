console.log('Starting app.js');

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note already exists with that title...');
  };
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found!');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed.' : 'No note(s) removed';
  console.log(message);
} else {
  console.log('Command not found');
}
