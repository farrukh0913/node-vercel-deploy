const express = require('express');
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const port = 3000;
// routes(app);
const url = `mongodb+srv://wwwburjsoft:gBLTbWrZsDYS9kR5@cluster0.k2bwmju.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database!", url);
  })
  .catch((error) => {
    console.log("Connection failed!:", error);
  });

server.listen(port, () => {
  console.log(`Express server listening ${port}`);
});

app.get('/', function (req, res) {
  res.send('**** Hello World! APP is running faster2. ****');
});