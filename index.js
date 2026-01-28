const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'create the hello world app for vercel' });
});
app.listen(3000);