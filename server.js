const express = require("express");
const request = require("urllib");
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});