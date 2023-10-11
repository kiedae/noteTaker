const express = require('express');
const jsonRoutes = express.Router();
const fs = require('fs').promises;
const uuid = require('uuid');


// gets the notes from db.json
jsonRoutes.get('/api/notes', async (req, res) => {
  // reads the json file and puts into string
    const data = await fs.readFile('db/db.json', 'utf8');
    const notes = JSON.parse(data);
    //returns the notes to the notes.html
    res.json(notes);
});

// reads user input for note text and body and sends it to db.json
jsonRoutes.post('/api/notes', async (req, res) => {
    const data = await fs.readFile('db/db.json', 'utf8');
    const notes = JSON.parse(data);
    const newNote = {
      "title": req.body.title,
      "text": req.body.text,
      "id": uuid.v4(), 
    };
    notes.push(newNote);
    await fs.writeFile('db/db.json', JSON.stringify(notes, null, 2), 'utf8');
    res.json(newNote);
});

jsonRoutes.delete('/api/notes/:id', async (req, res) => {
  const data = await fs.readFile("db/db.json", "utf8");
  const notes = JSON.parse(data);
  // sets idToDelete === the note the user is trying to delete
  const idToDelete = req.params.id;
  // array.filter takes all values that isnt the target value and forms a new array with them removing the target value
  const updatedNotes = notes.filter((note) => note.id !== idToDelete);
  // writes the notes back into the db.json
  await fs.writeFile('db/db.json', JSON.stringify(updatedNotes, null, 2), 'utf8');
  res.json({ message: 'Note Deleted'});
});

module.exports = jsonRoutes;