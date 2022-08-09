const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/dbConfig');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/conexa', require('./routes/routes'));

module.exports = app;