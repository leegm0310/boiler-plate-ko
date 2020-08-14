const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://leegm0310:godqhrgk5%21@clusternode.idcpp.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Mongo DB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! 난 이광민"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
