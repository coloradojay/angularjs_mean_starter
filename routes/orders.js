// Orders route
var express = require('express');
var router = express.Router();
var customers = require('../models/customers');

router.get('/', function (req, res) {
    var orders = [];
    for (var i = 0; i < customers.length; i++){
        if (customers[i].orders){
            for(var j = 0; j < customers[i].orders.length; j++){
                orders.push(customers[i].orders[j]);
            }
        }
    }

    res.json(orders);
});

module.exports = router;