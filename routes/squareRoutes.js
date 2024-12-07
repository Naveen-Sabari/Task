const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');


router.get('/', squareController.getSquares);

router.post('/', squareController.createSquare);

router.get('/:id', squareController.getSquare);

router.delete('/:id', squareController.deleteSquare);

module.exports = router;
