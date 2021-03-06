// Node JS server files

//*********************IMPORT MODULES***********************
var express = require('express');
var {moongose} = require('./db/mongoose');
var {User} = require('./models/user');
var bodyParser = require('body-parser');
var _ = require('lodash');
var request = require('request');

//*************************************************************
var app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
  console.log('hello');
});

app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send(users);
  }, (e) => {
    res.status(400).send();
  });
  request('https://api.legiscan.com/?key=21013898e1fd875297f2f109e94a2dbb&op=getBill&id=1026206', function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
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
