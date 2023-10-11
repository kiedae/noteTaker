const express = require('express');
const fs = require('fs').promises;
const uuid = require('uuid');
const app = express();
const PORT = process.env.PORT || 5500;
const htmlRoutes = require('./routes/htmlRoute.js');
const jsonRoutes = require('./routes/jsonRoute.js'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(jsonRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});