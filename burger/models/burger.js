const orm = require('./../config/orm');

function getDevouredBurgers(callback) {
    orm.selectFromWhere('burgers', 'devoured', true, (results) => {
        results.map(e => e.devoured ? e.devoured = true : e.devoured = false);
        if(typeof callback === 'function') callback(results);
    });
}

function getUndevouredBurgers(callback) {
    orm.selectFromWhere('burgers', 'devoured', false, (results) => {
        results.map(e => e.devoured ? e.devoured = true : e.devoured = false);
        if(typeof callback === 'function') callback(results);
    });
}

function addBurger(name, callback) {
    let burger = {
        name: name
    }
    orm.insertObject('burgers', burger, callback);
}

function updateBurger(id, update, callback) {
    update.devoured ? update.devoured = 1 : update.devoured = 0;
    orm.updateTable('burgers', update, {id: id}, callback);
}

module.exports = {
    getDevouredBurgers: getDevouredBurgers,
    getUndevouredBurgers: getUndevouredBurgers,
    addBurger: addBurger,
    updateBurger: updateBurger
}