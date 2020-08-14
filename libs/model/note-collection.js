'use strict';

const NotesSchema = require('./note-schema');

class NoteCRUD {
  get(str){
    return str ? NotesSchema.find({category: str}) : NotesSchema.find({}) ; 
  }
  create(obj){
    const { category, payload } = obj;
    const note = new NotesSchema({
      category: category,
      text: payload,
    });
    let saved =  note.save();
    return saved;
  }
  delete(id){
    console.log(id);
    return NotesSchema.findOneAndDelete({_id: id});
  }
  clear() {
    return NotesSchema.deleteMany({});
  }
}

module.exports = new NoteCRUD;
