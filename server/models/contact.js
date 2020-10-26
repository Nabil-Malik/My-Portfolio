/*File  Name: app.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 25 Oct 20*/

    let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);