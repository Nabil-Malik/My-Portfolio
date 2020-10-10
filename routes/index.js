/*File  Name: index.js
    Student Name: Nabil Malik
    Id: 301108920
    Date: 9 Oct 20*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/*GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About Me' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact_me', { title: 'Contact me' });
});




module.exports = router;
