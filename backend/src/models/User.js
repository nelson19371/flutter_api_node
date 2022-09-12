const {Schema, model} = require('mongoose');


new Schema({
    firstName: String,
    lastName: String,
    avatar: String

});

module.exports = model('User', userSchema);