// Code from https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039 and https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039

const express = require("express");
const app = express();

app.use("/static", express.static("public"));
//https://stackoverflow.com/questions/63542390/problems-getting-css-in-node-js
// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.send('Hello World!');
    });

app.post('/',(req, res) => {
    console.log(req.body);
    });

// const dotenv = require(“dotenv”);
// dotenv.config();

app.listen(3000, () => console.log("Server Up and running"));

