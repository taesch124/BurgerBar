const orm = require('./../config/orm');

function getDevouredBurgers(callback) {
    orm.getBurgersByDevoured(true, (results) => {
        results.map(e => e.devoured ? e.devoured = true : e.devoured = false);
        callback(results);
    });
}

function getUndevouredBurgers(callback) {
    orm.getBurgersByDevoured(false, (results) => {
        results.map(e => e.devoured ? e.devoured = true : e.devoured = false);
        callback(results);
    });
}

function addBurger(name, callback) {
    orm.addBurger(name, (results) => {
        console.log(results);
        callback(results);
    });
}

function updateBurger(id, update, callback) {
    orm.updateDevoured(id, callback);
}

module.exports = {
    getDevouredBurgers: getDevouredBurgers,
    getUndevouredBurgers: getUndevouredBurgers,
    addBurger: addBurger,
    updateBurger: updateBurger
}