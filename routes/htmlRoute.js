const express = require('express');
const path = require('path');
const htmlRoutes = express.Router();
const fs = require('fs');

htmlRoutes.get('', (req,res) => {
  const htmlPath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(htmlPath);
});
// Define your HTML routes here
htmlRoutes.get('/notes', (req, res) => {
  const notesPath = path.join(__dirname, '..', 'public', 'notes.html');
  res.sendFile(notesPath);
});


module.exports = htmlRoutes;