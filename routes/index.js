var express = require('express'),
    path = require('path'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('../public/index.html');
});

module.exports = router;
