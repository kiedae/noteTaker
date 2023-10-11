const express = require('express');
const path = require('path');
const htmlRoutes = express.Router();
const fs = require('fs');

// sets the default page to index.html
htmlRoutes.get('', (req,res) => {
  const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(htmlPath);
});
// gets notes from notes.index
htmlRoutes.get('/notes', (req, res) => {
  const notesPath = path.join(__dirname, '..', 'public', 'notes.html');
  res.sendFile(notesPath);
});


module.exports = htmlRoutes;