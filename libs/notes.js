'use strict';
const NotesCRUD = require('./model/note-collection');
/**
 * @constructor
 * Creates Note object
 */
class Note {
  constructor() {
  }
  /**
   * Runs action method for the new Note
   * @function
   */
  async execute(command) {
    switch (command.action) {
    case 'add':
      return this.add(command);
    case 'list':
      return this.list(command.payload);
    case 'delete':
      return this.delete(command.payload);
    default:
      return Promise.resolve();
    }
  }
  /**
   * Adds the new note
   * @function
   * @param {{Input}}
   */
  async add(obj) {
    let added = await NotesCRUD.create(obj);
    return added;
  }
  async list(str) {
    const notes = await NotesCRUD.get(str);
    notes.forEach(obj => {
      console.log(obj.text);
      console.log(`Category: ${obj.category} ID: ${obj._id}`);
      console.log('--------------------------------------------------');
    });
  }
  async delete(id) {
    await NotesCRUD.delete(id);
    console.log(`Deleted Note: ${id}`);
  }
}

module.exports = Note;
