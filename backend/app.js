const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose.connect("mongodb://host.docker.internal:27017/simpleapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send("Backend Working"));

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
