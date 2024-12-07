const Square = require('../models/square');


const getSquares = (req, res) => {
  Square.getAllSquares((err, squares) => {
    if (err) {
    //   console.error('Database query error: ', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json(squares);
  });
};




const createSquare = (req, res) => {
  const { title } = req.body;
  Square.addSquare(title, (err, id) => {
    if (err) {
    //   console.error('Database query error: ', err);
      return res.status(500).json({ message: 'Failed to add square' });
    }
    res.status(201).json({ id, title });
  });
};



const getSquare = (req, res) => {
  const { id } = req.params;
  Square.getSquareById(id, (err, square) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Internal server error', error: err });
    }
    if (!square) {
      return res.status(404).json({ message: 'Square not found' });
    }
    res.json(square);
  });
};



const deleteSquare = (req, res) => {
  const { id } = req.params;
  Square.deleteSquare(id, (err, result) => {
    if (err) {
      console.error('Database query error: ', err);
      return res.status(500).json({ message: 'Failed to delete square' });
    }
    res.json({ message: 'Square deleted' });
  });
};

module.exports = {
  getSquares,
  createSquare,
  getSquare,
  deleteSquare
};
