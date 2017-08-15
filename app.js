const express = require('express');
const port = process.env.PORT || 8887;
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
