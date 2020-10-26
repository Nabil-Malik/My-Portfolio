/*File  Name: app.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 25 Oct 20*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');
var sort = { name: 1 };
module.exports.displayContactList = (req, res, next) => {
   
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
             res.render('contacts/list', {title: 'Business Contacts', ContactList: contactList});      
        }
    }).find().sort(sort);
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/edit', {title: 'Edit Book', contact: contactToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
        
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the contact list
             res.redirect('/contact-list');
        }
    });
}