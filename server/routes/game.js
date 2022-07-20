const express = require('express')

const router = express.Router();
const ctrl = require('../controllers/game');
const { route } = require('./user');

router.route('/:id').get(ctrl.getGameById)
router.route('/new').post(ctrl.createGame)
router.route('/').get(ctrl.getAllGames)

module.exports = router