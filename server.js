const express= require('express');
const app= express();
require('./Config/dbConfig');
const tacheRoutes= require('./routes/tache');
const userRoutes= require('./routes/user');
const bodyParser= require('body-parser');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 5000;

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/tache', tacheRoutes)
app.use('/user', userRoutes)

app.listen(port, (err) => {
    err
      ? console.log(err)
      : console.log(`We are running on.. http://localhost:${port}`);
  });