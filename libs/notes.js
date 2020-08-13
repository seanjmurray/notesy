'use strict';
const NotesModel = require('./note-schema');
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
   */
  async add(obj) {
    const { category, payload } = obj;
    const note = new NotesModel({
      category: category,
      text: payload,
    });
    let saved = await note.save();
    return saved;
  }
  async list(str) {
    if(str){
      const notes = await NotesModel.find({category: str});
      notes.forEach(obj => {
        console.log(obj.text);
        console.log(`Category: ${obj.category} ID: ${obj._id}`);
        console.log('--------------------------------------------------');
      });
    }else{
      const notes = await NotesModel.find({});
      notes.forEach(obj => {
        console.log(obj.text);
        console.log(`Category: ${obj.category} ID: ${obj._id}`);
        console.log('--------------------------------------------------');
      });
    }
  }
  async delete(str) {
    await NotesModel.findByIdAndDelete(str);
    console.log(`Deleted Note: ${str}`);
  }
}

module.exports = Note;
