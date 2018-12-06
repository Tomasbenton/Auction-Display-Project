const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  exhibitorNumber: Number
},{
    collection: 'User'
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
