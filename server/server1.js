//resource creation-post/todos
//app.post does the creation in CRUD operations,as the user submita a new todo through POST request which is stored/created in database by app.post

var express = require('express');//1
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');//2,{ mongoose} is called destructuring
var { Todo } = require('./models/todo');//2
var { User } = require('./models/user');//2

var app = express();//3

app.use(bodyParser.json());//app.use is used to configure or register the middleware body parser.Body parser takes the json(the data entered by user?)and coverts it into object and stores it in req or req.body?
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });//todos is actually an array,but we are converting it into an object so that various other properties can be added or modified later on
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('starting on port 3000');
});//4