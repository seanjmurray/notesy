#!/usr/bin/env node
'use strict';
const mongoose = require('mongoose');
const Input = require('./libs/input');
const Note = require('./libs/notes');

mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const input = new Input();
const note = new Note(input);

if(input.valid()){
  note.execute(input.command)
    .then(mongoose.disconnect)
    .catch(err => console.error(err)); 

} else {
  help();
}
/**
 * @function
 * logs error message and exits process
 */
function help() {
  console.log('Something went wrong!!!');
  process.exit(9);
}
