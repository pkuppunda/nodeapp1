const express = require('express');
const app = express();
const port = process.env.VCAP_APP_PORT || 5000

app.get('/', function (req, res) {
  res.send('!!!Hello Pradeep Kumar!!!');
});
app.listen(port, function () {
  console.log('Web App listening on port ${port}');
});
