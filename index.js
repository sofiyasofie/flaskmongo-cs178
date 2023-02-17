// Code from https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039 and https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039

const express = require("express");
const app = express();

app.use("/static", express.static("public"));
//https://stackoverflow.com/questions/63542390/problems-getting-css-in-node-js
// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");

// Concept #1: app get
// Help from Ed post: https://edstem.org/us/courses/36322/discussion/2584489
app.get('/',(req, res) => {
    res.render("todo.ejs");
    });
// Concept #2: app post
app.post('/',(req, res) => {
    console.log(req.body);
    });

// MongoDB implementation:
// const dotenv = require(“dotenv”);
// dotenv.config();

// Concept #3: Listening to a port
app.listen(3000, () => console.log("Server Up and running"));

