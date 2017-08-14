const express = require('express');
const port = process.env.PORT || 8887;
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
