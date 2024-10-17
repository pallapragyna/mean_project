module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'Zoggy',
      pageHeader: {
        title: 'List Of Restaurants',
        
    },
      sidebar: "Looking for good ambiance and quality food? Zoggy helps you find the best places to eat near you. We have a list of the best restaurants, cafes, and bars in your area. We also have a list of the best places to hang out with friends and family. Zoggy is your go-to app for finding the best places to eat and have a good time.",
      locations: [{
          name: 'Tulips',
          address: 'Ghatkeshar ,Hyderabad',
          rating: 3,
          facilities: ['family dinning', 'Unlimited_Food', 'Good_Ambiance'],
          distance: '1km'
      }, {
          name: 'Absolute Barbecues',
          address: 'Medipally , Hyderabad',
          rating: 4,
          facilities: ['Unlimited_food', 'Barbeq Nation', 'Premium wifi'],
          distance: '20km'
      }, {
          name: 'Paradise',
          address: 'Secunderabad , Hyderabad',
          rating: 2,
          facilities: ['Food', 'Premium wifi','family dinning'],
          distance: '200km'
  }]
});
};
module.exports.locationInfo = function(req, res){
    res.render('locations-info1', { title: 'LocationInfo' });
  };
module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'LocationInfo1' });
  };
module.exports.locationInfo2 = function(req, res){
    res.render('locations-info3', { title: 'LocationInfo2' });
  };
module.exports.addReview = function(req, res){
    res.render('location-review', { title: 'ADD REVIEW' });
  };
  
  