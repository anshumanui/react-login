const express = require('express');
const path = require('path');

const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signup');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//	app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/signup', signUpRouter);

module.exports = app;
