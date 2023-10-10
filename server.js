const express = require('express');
const fs = require('fs').promises;
const uuid = require('uuid');
const app = express();
const PORT = process.env.PORT || 5500;
const htmlRoutes = require('./routes/htmlRoute.js');

app.use(htmlRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});