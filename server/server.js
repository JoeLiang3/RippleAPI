// Node JS server files

//*********************IMPORT MODULES***********************
var express = require('express');
var {moongose} = require('./db/mongoose');
var {User} = require('./models/user');
var bodyParser = require('body-parser');
var _ = require('lodash')

//*************************************************************
var app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send(users);
  }, (e) => {
    res.status(400).send();
  });
});

app.post('/users', (req, res) => {
  var user = new User({
    name: req.body.userName,
  });

  user.save().then((user) => {
    res.send(user);
  }, (err) => {
    res.status(400).send(err);
  });
});


//***********************Connect to port*********************
app.listen(3000, () => {
  console.log('Listening to port 3000');
});
module.exports = {app};

//***********************************************************
