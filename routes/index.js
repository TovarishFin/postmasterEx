var express = require('express');
var router = express.Router();
var postmaster = require('postmaster-shipping')({
	apiKey: 'tt_MTUyNDEwMDE6dGZ1aUh5Vl84aEwtLW4zdW5BNmlucWpkZEZR',
	password: 'edbe7332a50a161d5cc24e5c8a02b3a9'
},true);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  postmaster.v1.shipment.create({
    to: {
      company: 'personal',
      contact: req.body.cName,
      line1: req.body.StoAddr,
      city: req.body.StoCity,
      state: req.body.StoState,
      zip_code: req.body.StoZip,
      phone_no: req.body.cPhone
    },
    carrier: 'usps',
    service: '2DAY',
    package: {
      weight: .5,
      length: 10,
      width: 6,
      height: 8
    }
  }, function(err, response){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      console.log(response);
      res.send(response);
      };
    });
});

module.exports = router;
