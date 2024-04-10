const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('!!!Hello Pradeep Kumar!!!');
});
app.listen(3000, function () {
  console.log('Web App listening on port 3000');
});
