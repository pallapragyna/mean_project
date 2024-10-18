var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/locations');
var ctrlothers = require('../controller/others');
var ctrlmain = require('../controller/main');
exports.signin = function(req, res) {
    res.render('signin', { title: 'Sign In' }); // Ensure 'signin' matches your Pug file name
  }; 
router.get('/restaurants', ctrlLocations.homelist);
router.get('/locations', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
// router.get('/location/review/new', ctrlLocations.addReview);
router.get('/', ctrlothers.about);
router.get('/signin', ctrlmain.signin)
router.get('/review', ctrlmain.review)
router.get('/register', function(req, res, next) {
 res.render('register', { title: 'register' });
});

// Handle POST request for sign-in
router.post('/signin', function(req, res) {
  const { username, password } = req.body;

  // Add your authentication logic here (dummy check for now)
  if (username === 'Team17' && password ==='FoodReview') {
    // Redirect to home page on successful sign in
    res.redirect('/restaurants');
  } else {
    // Redirect back to the login page on failure
    res.redirect('/signin');
  }
});

router.post('/submit_review', function(req, res) {
  const { name,email,rating,review } = req.body;

  // Add your authentication logic here (dummy check for now)
  if (name === 'amulya' && email ==='xyz@gmail.com' && rating==='4' && review==='Ambiances and Food are cool') {
    // Redirect to home page on successful sign in
    res.redirect('/locations');
  } else {
    // Redirect back to the login page on failure
    res.redirect('/review');
  }
});
// // Handle POST request for sign-up
// router.post('/register', function(req, res) {
//   const { username, password } = req.body;

//   // Add your sign-up logic here (e.g., saving the user to the database)
//   if (username && password) {
//     // Registration successful, redirect to home page
//     res.redirect('/');
//   } else {
//     // Redirect back to the sign-up page on failure
//     res.redirect('/signup');
//   }
// });

 
module.exports = router;