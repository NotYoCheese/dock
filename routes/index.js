var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Who\'s on the dock' });
});

// router.get('/partials/list.jade', function (req, res) {
//   var name = req.name;
//   res.render('partials/list.jade');
// });

module.exports = router;
