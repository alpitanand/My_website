const mongoose = require('mongoose');

var dataschema = mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength: 2,
        trim : true
    },
    mailId:{
        type: String,
        required:true,
        minlength: 7,
        trim : true
    }
})

var data = mongoose.model('Input_Data',dataschema);
module.exports = {
    Data : data
}