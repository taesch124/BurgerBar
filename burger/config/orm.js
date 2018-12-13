const connection = require('./connection');

function getAllBurgers(callback) {
    let query = `SELECT id,
    name,
    devoured
    FROM burgers
    ORDER BY id;`;
    connection.query(query, (err, results) => {
        if(err) throw err;

        if(callback) callback(results);
    });
}

function getBurgersByDevoured(devoured, callback) {
    let query = `SELECT id,
    name,
    devoured
    FROM burgers
    WHERE devoured = ?
    ORDER BY id;`;
    let where = devoured
    connection.query(query, where, (err, results) => {
        if(err) throw err;

        if(callback) callback(results);
    });
}

function addBurger(name, callback) {
    let query = `INSERT INTO burgers SET ?`;
    let insert = {
        name: name,
        devoured: false
    };
    connection.query(query, insert, (err, results) => {
        if(err) throw err;

        if(callback) callback(results);
    });
}

function updateDevoured(id, callback) {
    let query = `UPDATE burgers
    SET devoured = true
    WHERE id = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;

        if(callback) callback(results);
    });
}

module.exports = {
    getAllBurgers: getAllBurgers,
    getBurgersByDevoured: getBurgersByDevoured,
    addBurger: addBurger
}