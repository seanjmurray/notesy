'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Input = require('../libs/input.js');
const Note = require('../libs/notes.js');

describe('Input Module', () => {

  it('parse() creates a good object', () => {
    let options = new Input();
    let command = options.getInput({ a: 'test' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('test');
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.command = {}; // break it
    expect(options.valid()).toBeFalsy();
  });

});

describe('Note Module', () => {

  it('execute() calls add method', () => {
    let options = new Input();
    let note = new Note(options);
    const spy = jest.spyOn(note, 'add');
    note.execute();
    expect(spy).toBeCalled();
  });
  it('add() console logs properly', () => {
    let options = new Input();
    let note = new Note(options);
    const spy = jest.spyOn(console, 'log');
    note.add();
    expect(spy).toHaveBeenCalledWith( 'Adding note: This is a note');
  });
  it('execute() should not be called without command ', () => {
    let options = new Input();
    options.command = {};
    let note = new Note(options);
    const spy = jest.spyOn(note, 'execute');
    expect(spy).not.toBeCalled();
  });
});