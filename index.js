'use strict';
const Input = require('./libs/input');
const Note = require('./libs/notes');

const input = new Input();
const note = new Note(input);

input.valid() ? note.execute() : help() ;
/**
 * @function
 * logs error message and exits process
 */
function help() {
  console.log('Something went wrong!!!');
  process.exit(9);
}
