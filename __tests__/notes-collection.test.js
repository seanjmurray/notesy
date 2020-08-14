require('@code-fellows/supergoose');
require('../jest.config');

const NotesCRUD = require('../libs/model/note-collection');

beforeEach(NotesCRUD.clear);

describe('Note collection', () => {

  it('can create a new note', async () => {
    const note = { category: 'test', payload: 'test message' };
    const createdNote = await NotesCRUD.create(note);
    expect(createdNote._id).toBeDefined();
    expect(createdNote.category).toBe('test');
    expect(createdNote.text).toBe('test message');
  });

  it('can get all notes', async () => {
    const note = { category: 'test', payload: 'test message' };
    const note1 = { category: 'test1', payload: 'test message' };
    const testNote = { category: 'test', text: 'test message' };
    const testNote1 = { category: 'test1', text: 'test message' };
    await NotesCRUD.create(note);
    await NotesCRUD.create(note1);
    const notes = await NotesCRUD.get();
    expect(notes.length).toBe(2);
    compareProps(testNote, notes[0]);
    compareProps(testNote1, notes[1]);
  });

  it('can get one note', async () => {
    const note = { category: 'test', payload: 'test message' };
    const note1 = { category: 'test1', payload: 'test message' };
    const testNote = { category: 'test', text: 'test message' };
    await NotesCRUD.create(note);
    await NotesCRUD.create(note1);
    const notes = await NotesCRUD.get('test');
    expect(notes.length).toBe(1);
    compareProps(testNote, notes[0]);
  });

  it('can delete a new note', async () => {
    const note = { category: 'test', payload: 'test message' };
    const createdNote = await NotesCRUD.create(note);
    await NotesCRUD.delete(createdNote._id);
    const notes = await NotesCRUD.get();
    expect(notes.length).toBe(0);
  });

  function compareProps(a, b) {
    for (const key in a) {
      expect(a[key]).toBe(b[key]);
    }
  }
});
