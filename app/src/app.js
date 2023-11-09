const express = require('express');
const app = express();
const port = 3000;

//credentials
//API=5XYg9ACa0dsXDnkBW5s7WOlyLfdFpcst
//CLIENT_ID=90A34722-A3E95B990B9
app.get('/', (req, res) => {
  res.send('Gabe\'s root endpoint :) ');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})