'use strict';
/**
 * @constructor
 * Creates Note object
 */
class Note {
  constructor(obj) {
    const { action,payload } = obj.command;
    this.action = action;
    this.payload = payload;
  }
  /**
   * Runs action method for the new Note
   */
  execute() {
    this[this.action](this);
  }
  /**
   * Adds the new note
   */
  add() {
    const note = {
      ID: Date.now(),
      note: this.payload,
    };
    console.log(`Adding note: ${note.note}`);
  }
}

module.exports = Note;
