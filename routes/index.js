var express = require('express');
var router = express.Router();


router.use('/posts', require('./posts'));
router.use('/users',require('./users'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
