const mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 2
  }
});


var User = mongoose.model('User', UserSchema);

module.exports = {User};
