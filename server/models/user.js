const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  saleNumber: {
    type: Number
  }
},{
    collection: 'User'
});

UserSchema.plugin(uniqueValidator);
var User = mongoose.model('User', UserSchema);
module.exports = User;
