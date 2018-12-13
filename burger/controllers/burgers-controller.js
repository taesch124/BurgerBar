const express = require('express');
const async = require('async');
const burger = require('./../models/burger');

const router = express.Router();

router.get('/burgers', (req, res) => {
    let response = {};
    async.parallel({
        devouredBurgers: function(callback) {
            burger.getDevouredBurgers((results) => {
                response.devouredBurgers = results;
                callback(null, results);
            });
        },
        undevouredBurgers: function(callback) {
            burger.getUndevouredBurgers((results) => {
                response.undevouredBurgers = results;
                callback(null, results);
            });
        }
    },
    (err, results) => {
        if(err) throw err;
        
        res.render('index', results);
    });
    
});

router.post('/burgers', (req, res) => {
    console.log(req.body);
    res.redirect('/burgers');
});

const BurgerController = function BurgerController(burgerView, burgerModel) {
    this.burgerView = burgerView;
    this.burgerModel = burgerModel;
}

module.exports = router;