const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

// folder where all the api routes will be gone
const todos = require('./routes/api/todoitem')

// initialize express
const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, "../public/public/build");

app.use(express.static(CLIENT_BUILD_PATH));

// middleware bodyparser
app.use(bodyParser.json());

// DB configuration
const db = require('./Config/key').mongoURI;

// Connect to database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
})

app.get("/", function(req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

//get all the api routes for todoList in the separate folder stored in todos variable
app.use('/api/todoitem', todos)

const port = 5000

app.listen(port, () => console.log(`server started at port ${port}`))