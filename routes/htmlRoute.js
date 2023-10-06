const PORT = process.env.PORT || 3001;
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const app = express();


app.use(express.urlencoded({extended: false}));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuid.v4(); 
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  
    data.push(newNote);
  
    fs.writeFileSync('db.json', JSON.stringify(data), 'utf8');
  
    res.json(newNote);
  });

  app.listen(PORT, ()=>{
    console.log(`Server running on https://localhost:${PORT}`);
});