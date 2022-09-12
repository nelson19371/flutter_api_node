const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost/flutter-node-tutorial',
    {
        useNewUrlParser : true

    })
    console.log('Database: Connected');

    

};

module.exports = {connect};