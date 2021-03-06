/*File  Name: app.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 25 Oct 20*/

    let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');


let passport = require('passport');


let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// GET Route for the Contact List page - READ Operation 
router.get('/',requireAuth, contactController.displayContactList);
// GET Route for displaying the Edit page - UPDATE Operation 
router.get('/edit/:id',requireAuth, contactController.displayEditPage);

//POST Route for processing the Edit page - UPDATE Operation 
router.post('/edit/:id',requireAuth, contactController.processEditPage);

// GET to perform  Deletion - DELETE Operation 
router.get('/delete/:id',requireAuth, contactController.performDelete);


module.exports = router;