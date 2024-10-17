var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlothers = require('../controller/others');
var ctrlmain = require('../controller/main');
exports.signin = function(req, res) {
    res.render('signin', { title: 'Sign In' }); // Ensure 'signin' matches your Pug file name
  }; 
router.get('/', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlothers.about);
router.get('/signin', ctrlmain.signin)
router.get('/review', ctrlmain.review)
router.get('/register', function(req, res, next) {
 res.render('register', { title: 'register' });
});
 
module.exports = router;