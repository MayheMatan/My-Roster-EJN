const express = require("express");
const path = require('path');
const api = require('./server/routes/api');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", api);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});