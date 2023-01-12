const express = require('express');
const path = require('path');

const loginRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//	app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/users', usersRouter);

module.exports = app;