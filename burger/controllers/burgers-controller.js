const express = require('express');
const async = require('async');
const fs = require('fs');
const path = require('path');
const burger = require('./../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

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

router.put('/burgers/:id', (req, res) => {
    let id = req.params.id;
    let update = req.query;
    burger.updateBurger(id, update, (results) => {
        res.json(results);
    });
});

router.delete('/burgers/:id', (req, res) => {
    let id = req.params.id;
    burger.deleteBurger(id, results => {
        res.json(results);
    });
})

router.post('/burgers', (req, res) => {
    burger.addBurger(req.body.name, (results) => {
        res.json(results);
    });
});

module.exports = router;