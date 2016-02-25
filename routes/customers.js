var express = require('express');
var router = express.Router();
var customers = require('../models/customers');

/* GET users listing. */
router.get('/', function(req, res) {
    //res.status(500).send({error: 'You\'ve encountered an error'});
    res.json(customers);
});


router.get('/:id', function(req, res){
    var customerId = parseInt(req.params.id);
    var data = {};
    for(var i = 0; i < customers.length; i++){
        if(customers[i].id === customerId){
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

router.delete('/:id', function(req, res){
    var customerId = parseInt(req.params.id);
    var data = { status: true};

    for (var i = 0; i < customers.length; i++){
        if(customers[i].id === customerId){
            customers.splice(i, 1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

module.exports = router;