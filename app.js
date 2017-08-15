const express = require('express');
const port = 8887;

const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Express is listening at http://localhost:${port}, also ${url}`);
});
