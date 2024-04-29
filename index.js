const express = require('express');
const app = express();

const port = 3000;
// routes(app);
// const url = `mongodb+srv://wwwburjsoft:gBLTbWrZsDYS9kR5@cluster0.k2bwmju.mongodb.net/?retryWrites=true&w=majority`;
// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("Connected to database!", url);
//   })
//   .catch((error) => {
//     console.log("Connection failed!:", error);
//   });

  app.listen(port, () => {
  console.log(`Express server listening ${port}`);
});

app.get('/', function (req, res) {
  res.send('**** Hello World! APP is running faster2. ****');
});