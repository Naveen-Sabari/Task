const db = require('../config/db');

const getAllSquares = (callback) => {
  db.query('SELECT * FROM squares', (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};


const addSquare = (title, callback) => {
  db.query('INSERT INTO squares (title) VALUES (?)', [title], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results.insertId);
  });
};


const getSquareById = (id, callback) => {
  db.query('SELECT * FROM squares WHERE id = ?', [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
};


const deleteSquare = (id, callback) => {
  db.query('DELETE FROM squares WHERE id = ?', [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

module.exports = {
  getAllSquares,
  addSquare,
  getSquareById,
  deleteSquare
};
