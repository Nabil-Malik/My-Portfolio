/*File  Name: index.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 9 Oct 20*/
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage );
/*GET About me page. */
router.get('/about',indexController.displayAboutPage );
/* GET Projects page. */
router.get('/projects',indexController.displayProjectPage );
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact me page. */
router.get('/contact', indexController.displayContactPage);
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);
/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);


module.exports = router;
