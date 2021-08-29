var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Rhaim',
    subtitle: 'Bem vindos ao site do '


});
});

module.exports = router;
