const express = require('express');
const app = express();
const port = 5000;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render("pages/index", {text : "Hello world!", h1 : "error"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
