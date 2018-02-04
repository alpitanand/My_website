// require('./../config.js');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var app = express();
var {
    mongoose
} = require('./models/mongoose.js');
var {
    Data
} = require('./models/form.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
var port = process.env.PORT || 3000;

app.post('/formfill', function (req, res) {

    var data = new Data({
        name: req.body.name,
        mailId: req.body.mailId
    })

    data.save().then((doc) => {
        res.status(200).send(doc);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})


app.listen(port, () => {
    console.log("Server is up");
});