
var express = require('express');
var path = require('path');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const { Router } = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(8080,()=>{
  console.log("sever is runnig on 7070")
})

module.exports = app;
