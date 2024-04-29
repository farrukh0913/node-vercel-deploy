const express = require('express');
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(  cors({ origin: "*"}));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

const port = 3000;
// routes(app);
const url = `mongodb+srv://wwwburjsoft:gBLTbWrZsDYS9kR5@cluster0.k2bwmju.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(
  url
).catch((e) => {
  console.log("error connecting to mongoose!");
});
mongoose.connection.on("error", (e) => {
  console.log("mongo connect error!");
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});


server.listen(port, () => {
  console.log(`Express server listening ${port}`);
  app.get('/', function (req, res) {
    res.send('**** Hello World! APP is running faster3. ****');
  });
});