const express = require('express');
const jsonRoutes = express.Router();
const fs = require('fs').promises;
const uuid = require('uuid');

jsonRoutes.get('/api/notes', async (req, res) => {
    const data = await fs.readFile('db/db.json', 'utf8');
    const notes = JSON.parse(data);
    res.json(notes);
});

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

module.exports = jsonRoutes;