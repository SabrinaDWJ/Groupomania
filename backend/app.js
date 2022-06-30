const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const path = require('path');


mongoose.connect('mongodb+srv://Sabrina:zazzino2008@cluster0.d9xe2.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;