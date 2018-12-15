const connection = require('./connection');

function selectFromWhere(table, col, where, callback) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [table, col, where], function(err, results) {
      if (err) throw err;
      if(typeof callback === 'function') callback(results);
    });
}

function insertObject(table, insert, callback) {
    let queryString = 'INSERT INTO ?? SET ?';

    connection.query(queryString, [table, insert], (err, results) => {
        if (err) throw err;

        if(typeof callback === 'function') callback(results);
    });
}

function updateTable(table, update, where, callback) {
    let queryString = 'UPDATE ?? SET ? WHERE ?';

    connection.query(queryString, [table, update, where], (err, results) => {
        if(err) throw err;

        if(typeof callback === 'function') callback(results);
    });
}

module.exports = {
    selectFromWhere: selectFromWhere,
    insertObject: insertObject,
    updateTable: updateTable
}