const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const recipeRouter = require('./routes/recipes');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/recipes', recipeRouter);

module.exports = app;
